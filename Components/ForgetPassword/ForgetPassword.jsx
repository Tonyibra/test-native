import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Logo from "../../assets/SwiftLogo.png";
import { PrimaryBtn } from "../Buttons/PrimaryBtn";
import { Forms } from "../Forms/Forms";
import TextInput from "../Forms/Inputs/TextInput";
import { ModalPopUp } from "../Modal/ModalPopUp";
export const ForgetPassword = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <View style={styles.title}>
        <Forms title="Forgot your password?" />
        <Text style={styles.subtitle}>
          Please enter your email address. You will receive a link via email
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryBtn title="Send Link" onPress={() => showModal()} />
      </View>
      <ModalPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    color: "#39393B",
  },
  inputContainer: {
    paddingVertical: 12,
  },
  btnContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
