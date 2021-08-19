import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const PrimaryBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1667B1",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 146,
    borderRadius: 22,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowColor: "black",
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
