import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
// Context and storage
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "../../context/userContext";
// Water Algorithm
import { CalculateWater } from "../../algorithms/waterPerDay";
// Phone dimensions
const { width, height } = Dimensions.get("window");

export default function BodyInfo({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [rude, setRude] = useState(0);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(18);

  const handleAgeInput = (val: any) => {
    setAge(parseInt(val));
  };

  const handleWeightInput = (val: any) => {
    setWeight(parseInt(val));
  };

  const handleSlider = (val: number) => {
    setRude(val);
  };
  const rudeLvl: string[] = [
    "I just want reminders 🥰",
    "You can be a little rude 😤",
    "Very rude 🤬",
    "Be horrifically rude ☠️",
  ];

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@rude_water_user", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const handleComplete = (user: object) => {
    storeData(user);
    signIn(user);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <TextInput
          maxLength={2}
          onChangeText={handleAgeInput}
          keyboardType={"numeric"}
          keyboardAppearance={"dark"}
          placeholder={"Age"}
          placeholderTextColor={"#2667ff"}
          selectionColor={"#2667ff"}
          style={styles.textInput}
        />
        <TextInput
          maxLength={3}
          onChangeText={handleWeightInput}
          keyboardType={"numeric"}
          keyboardAppearance={"dark"}
          placeholder={"Weight"}
          placeholderTextColor={"#2667ff"}
          selectionColor={"#2667ff"}
          style={styles.textInput}
        />
        <Text style={styles.btnTxt}>How rude should we be?</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          onValueChange={handleSlider}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#3b28cc"
          step={1}
        />
        <Text style={styles.btnTxt}>{rudeLvl[rude]}</Text>
        <TouchableOpacity
          onPress={() => {
            if (age >= 18 && weight >= 80) {
              handleComplete({
                age: age,
                weight: weight,
                rudeLvl: rude,
                water: CalculateWater(age, weight),
              });
            } else if (age < 18 && rude > 0) {
              Alert.alert("Must be 18 years or older to get rude messages");
            } else if (weight < 60) {
              Alert.alert(
                "If really are under 60lbs you should seek medical attention"
              );
            }
          }}
          activeOpacity={0.4}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Done</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
  28;
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
  btn: {
    backgroundColor: "#2667ff",
    height: height * 0.1,
    width: width * 0.8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textInput: {
    marginVertical: 23.5,
    fontSize: 45,
    color: "#2667ff",
    borderColor: "#2667ff",
    borderWidth: 5,
    borderRadius: 15,
    width: width * 0.8,
    textAlign: "center",
    padding: 10,
  },
});
