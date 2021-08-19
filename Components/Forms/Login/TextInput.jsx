import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput as RnTextInput,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const TextInput = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <RnTextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#707070"
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: "white",
    height: 44,
    borderRadius: 22,
    borderColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowColor: "black",
    shadowOffset: { height: 3, width: 3 },
    width: width / 1.2,
    paddingHorizontal: 20,
  },
});
