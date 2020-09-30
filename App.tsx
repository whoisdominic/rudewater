import React, { useState, useEffect, useMemo } from "react";
import { View, ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

// Context
import { AuthContext } from "./context/userContext";
// Setup Screens
import LandingScreen from "./screens/rootscreens/LandingScreen";
import WarningScreen from "./screens/rootscreens/WarningScreen";
import PermissionScreen from "./screens/rootscreens/PermissionsScreen";
import ProfileScreen from "./screens/rootscreens/ProfileScreen";
// Main Screens
import HomeScreen from "./screens/mainscreens/Home";
import SettingsScreen from "./screens/mainscreens/Settings";

const SetupStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("@rude_water_user");
    } catch (e) {
      console.log(e);
    }
    console.log("Done.");
  };

  const authContext = useMemo(
    () => ({
      signOut: () => {
        removeToken();
        setUserToken(null);
        setIsLoading(false);
      },
      signIn: (props: any) => {
        setUserToken(props);
      },
    }),
    []
  );

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@rude_water_user");
      console.log("top token", jsonValue);
      if (jsonValue === null) {
        setUserToken(null);
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error in getData", e);
      // error reading value
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setUserToken(getData());
    }, 1200);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212121",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Settings" component={SettingsScreen} />
          </HomeStack.Navigator>
        ) : (
          <SetupStack.Navigator headerMode="none">
            <SetupStack.Screen name="Landing" component={LandingScreen} />
            <SetupStack.Screen name="Warning" component={WarningScreen} />
            <SetupStack.Screen name="Permission" component={PermissionScreen} />
            <SetupStack.Screen name="Profile" component={ProfileScreen} />
          </SetupStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
