import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BodyInfo() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Body Info</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000A14",
    alignItems: "center",
    justifyContent: "center",
  },
});
