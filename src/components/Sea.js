import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const Sea = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: "#FFF",
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#FFF",
        activeDotColor: "#FFF",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../images/sea.png")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 20,
            height: 500,
            width: 300,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/sea1.png")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 20,
            height: 500,
            width: 400,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/sea3.png")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            borderRadius: 20,
            height: 500,
            width: 400,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
export default Sea;
