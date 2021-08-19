import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Map from "../assets/Map.png";
import SignIn from "../Components/Login/SignIn";
const { width, height } = Dimensions.get("window");
export const ContinueLogin = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={Map}>
      <SignIn />
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
    opacity: 0.8,
  },
});
