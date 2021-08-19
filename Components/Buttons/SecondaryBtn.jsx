import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const SecondaryBtn = ({ title, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 40,
    width: 146,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowColor: "black",
  },
  text: {
    fontSize: 16,
    color: "#1667B1",
    fontWeight: "bold",
  },
});
