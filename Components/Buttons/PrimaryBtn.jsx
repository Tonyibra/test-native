import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const PrimaryBtn = ({ title }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
