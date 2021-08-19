import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Logo from "../../assets/SwiftLogo.png";
import { PrimaryBtn } from "../Buttons/PrimaryBtn";
import { Forms } from "../Forms/Forms";
import TextInput from "../Forms/Login/TextInput";
const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Logo} />
      </View>
      <View>
        <Forms title="Continue signing in" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="PhoneNumber" />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryBtn title="Sign in" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    flex: 1,
  },
  imgContainer: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 0.35,
    alignItems: "center",
  },
  btnContainer: {
    alignItems: "center",
  },
});
