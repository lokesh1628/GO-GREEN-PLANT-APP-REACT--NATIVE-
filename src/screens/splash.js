//import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Firebase from "./Firebase";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.check();
  }

  check() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("login");
      }
    });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../images/home.png")}
          style={{ width: 350, height: 350, borderRadius: 10 }}
        />
      </View>
    );
  }
}
