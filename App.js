import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingScreen } from "./Screens/OnboardingScreen";
import { AuthScreen } from "./Screens/AuthScreen.jsx";
import { ContinueLogin } from "./Screens/ContinueLogin";
import { SignUpScreen } from "./Screens/SignUpScreen";
import { ForgetPasswordScreen } from "./Screens/ForgetPasswordScreen";
import HomeScreen from "./Screens/HomeScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerTransparent: true,
            title: null,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ContinueLogin"
          component={ContinueLogin}
          options={{
            headerTransparent: true,
            title: null,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{
            headerTransparent: true,
            title: null,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerLeft: null,
            gestureEnabled: false,
            headerStyle: {
              backgroundColor: "#1667B1",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
