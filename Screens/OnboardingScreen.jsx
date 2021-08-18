import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Onboarding } from "../Components/Onboarding/Onboarding";
export const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding navigation={navigation} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
