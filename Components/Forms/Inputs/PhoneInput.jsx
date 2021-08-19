import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const PhoneInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mobileInputContainer}
        placeholder="+961"
        placeholderTextColor="#707070"
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Phone Number"
        placeholderTextColor="#707070"
      />
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  mobileInputContainer: {
    backgroundColor: "white",
    height: 44,
    borderRadius: 22,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "#707070",
    borderRightWidth: 1,
    width: 80,
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: "white",
    height: 44,
    borderColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 22,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    shadowColor: "black",
    shadowOffset: { height: 3, width: 3 },
    width: width / 1.55,
    paddingHorizontal: 20,
  },
});
