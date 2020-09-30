import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-community/async-storage";
// Icons
import { AntDesign } from "@expo/vector-icons";
// Images
import DrinkYaWater from "../../assets/typo/rudewater.png";
import Droplet from "../../assets/typo/droplet.png";
// Water Algorithm

// Phone dimensions
const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@rude_water_user");
      console.log("home token", jsonValue);
      return jsonValue != null ? setUserData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("error in getData", e);
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    console.log("user data", userData);
  }, []);
  const handleSlider = (val: any) => {
    console.log(val);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.titleImg}
          source={DrinkYaWater}
        />
        <Image resizeMode="contain" style={styles.titleImg} source={Droplet} />
        <View style={styles.progress}>
          <Text style={{ fontSize: 32.5 }}>
            Water Per day = {userData ? <>{userData.water}</> : <></>} Oz
          </Text>
        </View>
        <View style={styles.account}>
          <Text style={styles.btnTxt}>Settings</Text>
          <AntDesign
            onPress={() => navigation.navigate("Settings")}
            name="user"
            size={62}
            color="#3b28cc"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000A14",
    alignItems: "center",
  },
  btnTxt: {
    color: "#f5f5f5",
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
  },
  titleImg: {
    width: width * 0.9,
    marginTop: -40,
  },
  account: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.8,
    borderColor: "#3b28cc",
    borderWidth: 5,
    borderRadius: 15,
    paddingHorizontal: 35,
  },
  progress: {
    width: width * 0.9,
    height: height * 0.5,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
});
