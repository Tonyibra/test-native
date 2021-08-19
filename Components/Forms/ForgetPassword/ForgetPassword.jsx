import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ForgetPassword = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Forget Password?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  text: {
    color: "#1667B1",
    fontSize: 14,
  },
});
