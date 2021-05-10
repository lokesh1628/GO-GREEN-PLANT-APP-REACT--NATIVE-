import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  TextInput,
  Linking,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import Firebase from "./Firebase";

class login extends React.Component {
  static navigationOptions = {
    title: "Home",
  };
  constructor() {
    super();
    this.state = {
      isVisible: true,
      email: "",
      password: "",
    };
  }

  SignIn = (email, password) => {
    try {
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          this.props.navigation.navigate("Home");
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          source={require("../images/bg1.png")}
          style={{
            flex: 1,
            resizeMode: "cover",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Login
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20 }}>
              username
            </Text>
            <TextInput
              value={this.state.username}
              onChangeText={(val) => this.setState({ email: val })}
              style={styles.container}
              placeholder="Enter Email"
              keyboardType="email-address"
              placeholderTextColor="#9a73ef"
              style={{
                color: "white",
                height: 40,
                width: 200,
                borderColor: "Black",
                borderBottomWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
              Password
            </Text>
            <TextInput
              value={this.state.password}
              onChangeText={(val) => this.setState({ password: val })}
              placeholder={"Password"}
              secureTextEntry={true}
              keyboardType="password"
              style={styles.container}
              placeholder="Password"
              placeholderTextColor="#9a73ef"
              secureTextEntry={true}
              secureTextEntry={this.state.ver}
              style={{
                color: "white",
                height: 40,
                width: 200,
                borderColor: "white",
                borderBottomWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity>
            <View style={{ marginTop: 20, borderRadius: 60, width: 220 }}>
              <Button
                title={"Login"}
                style={styles.input}
                onPress={() =>
                  this.SignIn(this.state.email, this.state.password)
                }
                colors={["rgba(0,164,109,0.4)", "transparent"]}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Text onPress={() => this.props.navigation.navigate("register")}>
              {" "}
              or Sign up using
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    //paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 50,
    borderRadius: 180,
  },
});

export default login;

/*import React, { Component, StatusBar } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  TextInput,
  Linking,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SocialIcon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
  };
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          source={require("../images/bg.png")}
          style={{
            flex: 1,
            resizeMode: "cover",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={["rgba(0,164,109,0.09)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 100,
              marginTop: 220,
              top: 0,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 35, marginTop: 100 }}>
            Login
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>username</Text>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              style={styles.container}
              placeholder="Enter Username"
              placeholderTextColor="#9a73ef"
              style={{
                color: "white",
                height: 40,
                width: 200,
                borderColor: "Black",
                borderBottomWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
              Password
            </Text>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.container}
              placeholder="Password"
              placeholderTextColor="#9a73ef"
              secureTextEntry={this.state.ver}
              style={{
                color: "white",
                height: 40,
                width: 200,
                borderColor: "white",
                borderBottomWidth: 1,
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity>
            <View style={{ marginTop: 20, borderRadius: 60, width: 220 }}>
              <Button
                title={"Login"}
                style={styles.input}
                onPress={() => this.props.navigation.navigate("Home")}
                colors={["rgba(0,164,109,0.4)", "transparent"]}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Text> or Sign up using</Text>
          </View>
          <TouchableOpacity>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    Linking.openURL("https://facebook.com");
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    Linking.openURL("https://twitter.com");
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    Linking.openURL("https://google.com");
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    flex: 1,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 2250,
    marginBottom: 50,
    borderRadius: 180,
  },
});
export default LoginScreen;
/*import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import MusicApp from "../screens/Home";
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
class login extends React.Component {
  static navigationOptions = {
    title: "Home1",
  };
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("../images/bg.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MusicApp />;
  }
}
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home1"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen name="Home1" component={Home1} />
    </Stack.Navigator>
  );
}
export default login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
