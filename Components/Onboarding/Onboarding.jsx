import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import slidesData from "../../slidesData.js";
import Paginator from "../Paginator/Paginator.jsx";
import { OnboardingData } from "./OnboardingData.jsx";
import { PaginationController } from "./PaginationController/PaginationController.jsx";
const { width, height } = Dimensions.get("window");

export const Onboarding = ({ navigation }) => {
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentScreenIdx(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentScreenIdx < slidesData.length - 1) {
      sliderRef.current.scrollToIndex({ index: currentScreenIdx + 1 });
    } else if (currentScreenIdx === slidesData.length - 1) {
      navigation.replace("SignIn");
    }
  };

  const skipBoarding = () => {
    navigation.replace("SignIn");
  };
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
      <View style={styles.controlPaginators}>
        <PaginationController
          title="Skip"
          color="#39393B"
          onPress={skipBoarding}
        />
        <PaginationController title="Next" color="#1667B1" onPress={scrollTo} />
      </View>
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
  controlPaginators: {
    position: "absolute",
    flexDirection: "row",
    bottom: height / 5.5,
  },
});
