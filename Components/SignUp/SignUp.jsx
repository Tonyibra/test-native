import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput as RnTextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../../assets/SwiftLogo.png";
import { SecondaryBtn } from "../Buttons/SecondaryBtn";
import { ForgetPassword } from "../Forms/ForgetPassword/ForgetPassword";
import { Forms } from "../Forms/Forms";
import { Socials } from "../Socials/Socials";
const { width, height } = Dimensions.get("window");
import TextInput from "../Forms/Inputs/TextInput";
import { PrimaryBtn } from "../Buttons/PrimaryBtn";
import PhoneInput from "../Forms/Inputs/PhoneInput";

export const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImage}>
        <Image source={Logo} />
      </View>
      <View style={styles.formContainer}>
        <Forms title="Sign up" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyles} placeholder="Full Name" />
        <TextInput style={styles.inputStyles} placeholder="Email" />
        <PhoneInput />
        <TextInput
          style={styles.inputStyles}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputStyles}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.signUpContainer}>
        <PrimaryBtn title="Sign UP" />
        <Text style={styles.otherLoginsText}>- Or login with -</Text>
        <View style={styles.socialsContainer}>
          <Socials
            size={28}
            name="sc-facebook"
            iconType="EvilIcons"
            color="#1667B1"
          />
          <Socials
            size={24}
            name="google"
            iconType="AntDesign"
            color="#DB4437"
          />
          <View style={styles.socilasBg}>
            <Socials
              name="apple1"
              iconType="AntDesign"
              size={24}
              color="#000"
            />
          </View>
        </View>
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
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  otherLoginsText: {
    paddingTop: 20,
    color: "#1667B1",
    fontSize: 15,
    paddingBottom: 10,
  },
  socialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerTitle: {
    color: "#1667B1",
    fontSize: 15,
    paddingBottom: 8,
  },
  footerLink: {
    color: "#1667B1",
    fontWeight: "bold",
  },
  inputContainer: {
    alignItems: "center",
  },
});
