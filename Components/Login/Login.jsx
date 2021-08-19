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
import { Socials } from "../Socials/Socials";
const { width, height } = Dimensions.get("window");
import TextInput from "../Forms/Inputs/TextInput";

export const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImage}>
        <Image source={Logo} />
      </View>
      <View style={styles.formContainer}>
        <Forms title="Sign in" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Email or Phone Number"
        />
        <TextInput
          style={styles.inputStyles}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forgetPassword}>
        <ForgetPassword onPress={() => navigation.navigate("ForgetPassword")} />
      </View>
      <View style={styles.signInContainer}>
        <SecondaryBtn
          title="Sign in"
          onPress={() => navigation.navigate("ContinueLogin")}
        />
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
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Don’t have an account?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up
          </Text>
        </Text>
        <Text style={styles.footerLink}>Sign in as a driver</Text>
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
  signInContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  forgetPassword: {
    width: width / 1.1,
  },
  otherLoginsText: {
    paddingTop: 20,
    color: "#1667B1",
    fontSize: 15,
  },
  socialsContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  footer: {
    flex: 0.3,
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
