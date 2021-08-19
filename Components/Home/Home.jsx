import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import HomeMap from "../../assets/HomeMap.png";
import Menu from "../../assets/Drawer_icon.png";
const { width, height } = Dimensions.get("window");

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.menu}>
          <Image source={Menu} />
        </View>
        <View>
          <Text style={styles.headerText}>Welcome!</Text>
        </View>
        <View />
      </View>
      <Image
        source={HomeMap}
        resizeMode="cover"
        style={styles.bgContainer}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1667B1" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1667B1",
    alignItems: "center",
    position: "absolute",
    top: 40,
    width: width,
    paddingHorizontal: 20,
  },
  headerText: {
    paddingTop: 30,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  bgContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
    position: "absolute",
    bottom: -25,
  },
  menu: {
    paddingTop: 30,
    justifyContent: "space-between",
  },
});
