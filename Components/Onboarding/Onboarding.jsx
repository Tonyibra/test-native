import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import slidesData from "../../slidesData.js";
import Paginator from "../Paginator/Paginator.jsx";
import { OnboardingData } from "./OnboardingData.jsx";
export const Onboarding = () => {
  const [cuurentScreenIdx, setCurrentScreenIdx] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentScreenIdx(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View styles={styles.flatListView}>
        <Animated.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          data={slidesData}
          renderItem={({ item }) => <OnboardingData item={item} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={30}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={sliderRef}
        />
      </View>
      <Paginator data={slidesData} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatListView: {
    flex: 3,
  },
});
