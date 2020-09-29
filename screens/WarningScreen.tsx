import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Typo
import WarningTypo from "../assets/typo/warning.png";

const { width, height } = Dimensions.get("window");

export default function Warning({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Image style={styles.warning} source={WarningTypo} />
      </SafeAreaView>
      <View style={styles.textCont}>
        <Text style={styles.btnTxt}>
          The language used in this app is not sutable for young children.
        </Text>
        <Text style={styles.btnTxt}>Continue at your own risk.</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Permission")}
        activeOpacity={0.4}
        style={styles.btn}
      >
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000A14",
    alignItems: "center",
    maxWidth: width,
    maxHeight: height,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCont: { width: width * 0.7 },
  warning: {
    marginTop: 15,
  },
  advisory: {
    width: width * 0.6,
  },
  btn: {
    backgroundColor: "#2667ff",
    height: height * 0.1,
    width: width * 0.8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  btnTxt: {
    color: "#f5f5f5",
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
  },
});
