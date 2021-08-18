import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const PaginationController = ({ title, onPress, ...props }) => {
  const color = props.color;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 30,
  },
});
