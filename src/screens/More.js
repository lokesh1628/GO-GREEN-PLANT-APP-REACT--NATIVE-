import React from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StyledText from "react-native-styled-text";
import Firebase from "./Firebase";

var cart = [];
var order = [];

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    var email = Firebase.auth().currentUser.email;
    var email1 = email.split("@").join("_");
    var email2 = email1.split(".").join("-");
    var email3 = email2.split(".").join("-");
    Firebase.database()
      .ref()
      .child(email3)
      .child("Cart")
      .on("value", function (data) {
        cart = [];
        data.forEach((item, key) => {
          var feed = {
            Name: item.val().Name,
            Price: item.val().Price,
          };
          cart.push(feed);
        });
      });

    Firebase.database()
      .ref()
      .child(email3)
      .child("orders")
      .on("value", function (data) {
        order = [];
        data.forEach((item, key) => {
          var feed = {
            Name: item.val().UserName,
            Price: item.val().Price,
            Address: item.val().address,
            City: item.val().city,
            Phone: item.val().phone,
            Pincode: item.val().pincode,
          };
          order.push(feed);
        });
      });
  }

  componentDidMount() {
    var email = Firebase.auth().currentUser.email;
    var email1 = email.split("@").join("_");
    var email2 = email1.split(".").join("-");
    var email3 = email2.split(".").join("-");
    Firebase.database()
      .ref()
      .child(email3)
      .child("Cart")
      .on("value", function (data) {
        cart = [];
        data.forEach((item, key) => {
          var feed = {
            Name: item.val().Name,
            Price: item.val().Price,
          };
          cart.push(feed);
        });
      });

    Firebase.database()
      .ref()
      .child(email3)
      .child("orders")
      .on("value", function (data) {
        order = [];
        data.forEach((item, key) => {
          var feed = {
            Name: item.val().UserName,
            Price: item.val().Price,
            Address: item.val().address,
            City: item.val().city,
            Phone: item.val().phone,
            Pincode: item.val().pincode,
          };
          order.push(feed);
        });
      });
  }
  render() {
    console.log(cart);
    console.log(order);
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#00a46c",
            height: "12%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                CART
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 1, marginTop: 20 }}>
          <StyledText textStyles={textStyles}>
            {" <demo><i>ADD</i> CART</demo>"}
          </StyledText>
          <View style={{ margin: 30 }}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={cart}
              renderItem={({ item }) => (
                <View key={item.id}>
                  <Text>{item.Name}</Text>
                  <Text>{item.Price}</Text>
                </View>
              )}
            />
          </View>

          <StyledText textStyles={textStyles}>
            {" <demo><i>ORDERS</i></demo>"}
          </StyledText>
          <View style={{ margin: 30 }}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={order}
              renderItem={({ item }) => (
                <View key={item.id}>
                  <Text>{item.Name}</Text>
                  <Text>{item.Price}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const textStyles = StyleSheet.create({
  demo: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "#555555",
    textShadowRadius: 6,
    fontSize: 24,
    color: "#22AA44",
  },
});
