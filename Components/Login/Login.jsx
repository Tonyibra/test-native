import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import Logo from "../../assets/SwiftLogo.png";
import { SecondaryBtn } from "../Buttons/SecondaryBtn";
import { ForgetPassword } from "../Forms/ForgetPassword/ForgetPassword";
import { Forms } from "../Forms/Forms";
const { width, height } = Dimensions.get("window");
export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImage}>
        <Image source={Logo} />
      </View>
      <View style={styles.formContainer}>
        <Forms title="Sign in" />
      </View>
      <View style={styles.forgetPassword}>
        <ForgetPassword />
      </View>
      <View style={styles.btnContainer}>
        <SecondaryBtn title="Sign in" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
  },
  logoImage: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  forgetPassword: {
    width: width / 1.1,
  },
});
