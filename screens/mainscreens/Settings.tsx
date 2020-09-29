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
} from "react-native";
import Slider from "@react-native-community/slider";

// Storage
import AsyncStorage from "@react-native-community/async-storage";
// Context
import { AuthContext } from "../../context/userContext";
// Phone dimensions
const { width, height } = Dimensions.get("window");

export default function SettingsScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.btnTxt}>Settings</Text>
        <TouchableOpacity
          onPress={() => signOut()}
          activeOpacity={0.4}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Logout</Text>
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
});
