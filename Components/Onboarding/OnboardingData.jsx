import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

export const OnboardingData = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        style={[styles.OnBoardingImage, { width, resizeMode: "cover" }]}
        source={item.img}
      />
      <View style={styles.onBoaringDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
      <View style={styles.overlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor:
      "linear-gradient(90deg, rgba(245,247,251,1) 0%, rgba(245,247,251,1) 0%);",
    zIndex: 1,
    opacity: 0.5,
  },

  OnBoardingImage: {
    flex: 1,
    justifyContent: "center",
  },
  onBoaringDetails: {
    zIndex: 2,
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#1667B1",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingBottom: 8,
  },
  subTitle: {
    textAlign: "center",
    paddingHorizontal: 40,
    fontSize: 16,
    color: "#39393B",
  },
});
