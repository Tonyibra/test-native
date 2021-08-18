import React from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";

const { width, height } = Dimensions.get("window");

const DOT_SIZE = 12;
const DOT_SPACING = 8;
const DOT_COLOR = "#1667B1";

const Paginator = ({ data, scrollX }) => {
  return (
    <View style={styles.container}>
      {data?.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        });

        return <Animated.View key={index} style={[styles.dot, { opacity }]} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: height / 4,
    flexDirection: "row",
  },
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE,
    marginHorizontal: DOT_SPACING,
    backgroundColor: DOT_COLOR,
  },
});
