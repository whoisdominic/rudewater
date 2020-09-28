import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Setup Screens
import LandingScreen from "./screens/LandingScreen";
import WarningScreen from "./screens/WarningScreen";
import PermissionScreen from "./screens/PermissionsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const SetupStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SetupStack.Navigator headerMode="none">
        <SetupStack.Screen name="Landing" component={LandingScreen} />
        <SetupStack.Screen name="Warning" component={WarningScreen} />
        <SetupStack.Screen name="Permission" component={PermissionScreen} />
        <SetupStack.Screen name="Profile" component={ProfileScreen} />
      </SetupStack.Navigator>
    </NavigationContainer>
  );
}
