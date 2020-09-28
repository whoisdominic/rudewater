import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import WaterLoader from "../assets/lotties/lf30_editor_mr8ba4wq.json";
import RudeTitle from "../assets/typo/Rude.png";

const { width, height } = Dimensions.get("window");

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={styles.contentCont}>
          <Image source={RudeTitle} style={styles.title} />
          <LottieView
            style={styles.animation}
            loop={false}
            autoPlay
            onAnimationFinish={() => navigation.navigate("Warning")}
            speed={1}
            source={WaterLoader}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Warning")}
            activeOpacity={0.4}
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>Let's get hydrated</Text>
          </TouchableOpacity>
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
    justifyContent: "space-evenly",
  },
  contentCont: {
    flex: 1,
    height: height * 0.7,
  },
  animationCont: {
    justifyContent: "center",
    alignContent: "center",
  },
  animation: { marginBottom: 15 },
  title: { marginBottom: 15 },
  btn: {
    backgroundColor: "#2667ff",
    height: height * 0.1,
    width: width * 0.8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 300,
  },
  btnTxt: {
    color: "#f5f5f5",
    fontSize: 35,
  },
});
