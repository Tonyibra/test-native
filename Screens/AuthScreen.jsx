import React from "react";
import { StyleSheet, ImageBackground, Dimensions, View } from "react-native";
import Map from "../assets/Map.png";
import { Login } from "../Components/Login/Login";
const { width, height } = Dimensions.get("window");

export const AuthScreen = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={Map}>
      <Login />
      <View style={styles.overlay} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    width: width,
    height: height,
    backgroundColor:
      "linear-gradient(90deg, rgba(245,247,251,1) 0%, rgba(245,247,251,1) 0%);",
    zIndex: 1,
    opacity: 0.75,
  },
});
