import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Forms = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    color: "#1667B1",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 28,
  },
  btnContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
