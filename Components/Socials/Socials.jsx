import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export const Socials = ({ onPress, iconType, size, color, name }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      {iconType === "Entypo" && <Icon name={name} size={size} color="#fff" />}
      {iconType === "AntDesign" && (
        <AntDesign name={name} size={size} color="#fff" />
      )}
      {iconType === "EvilIcons" && (
        <EvilIcons name={name} size={size} color={color} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
