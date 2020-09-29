import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";

const { width, height } = Dimensions.get("window");

export default function BodyInfo({ navigation }) {
  const [slider, setSlider] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(18);

  const handleAgeInput = (val: any) => {
    setAge(parseInt(val));
  };

  const handleWeightInput = (val: any) => {
    setWeight(parseInt(val));
  };

  const handleSlider = (val: number) => {
    setSlider(val);
  };
  const rudeLvl: string[] = [
    "I just want reminders 🥰",
    "You can be a little rude 😤",
    "Very rude 🤬",
    "Be horrifically rude ☠️",
  ];

  const handleComplete = () => {
    console.log(age, weight, slider);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <TextInput
          defaultValue={"18"}
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
          defaultValue={"150"}
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
        <Text style={styles.btnTxt}>{rudeLvl[slider]}</Text>
        <TouchableOpacity
          onPress={handleComplete}
          activeOpacity={0.4}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Done</Text>
        </TouchableOpacity>
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
