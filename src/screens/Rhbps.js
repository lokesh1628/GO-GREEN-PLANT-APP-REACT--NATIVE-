import React from "react";
import { View, Text, Image } from "react-native";
import Bhp from "../components/Bhp";
import { TouchableOpacity } from "react-native-gesture-handler";
import Firebase from "./Firebase";

class Rhbps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      price: "",
      email: "",
    };
  }

  componentDidMount() {
    var img = this.props.route.params.Image;
    var price = this.props.route.params.Price;
    var email = Firebase.auth().currentUser.email;
    var email1 = email.split("@").join("_");
    var email2 = email1.split(".").join("-");
    var email3 = email2.split(".").join("-");
    this.setState({
      image: img,
      price: price,
      email: email3,
    });
  }

  Addtocart(Name, Price) {
    console.log(Price);
    Firebase.database()
      .ref()
      .child(this.state.email)
      .child("Cart")
      .child(Name)
      .set({
        Name: Name,
        Price: Price,
      })
      .then((result) => {
        alert("Added to cart");
      })
      .catch((err) => {});
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "90%",
          }}
        >
          <View style={{ width: "10%", paddingLeft: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require("../images/17.png")}
                style={{ marginVertical: 40 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "90%" }}>
            <Bhp />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -80,
            marginHorizontal: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              color: "#62636a",
              width: 200,
            }}
          >
            RHBP - Growth Plus
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#00a46c",
              marginLeft: 100,
              fontSize: 20,
              width: 80,
            }}
          >
            Price: 360
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              width: "45%",
              backgroundColor: "#00a46c",
              height: 70,
              marginTop: 20,
              borderTopRightRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("order", {
                  Name: "Rhbps",
                  Price: 360,
                })
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 17,
                  }}
                >
                  Buy Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "45%",
              backgroundColor: "#00a46c",
              height: 70,
              marginTop: 20,
              borderTopLeftRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => this.Addtocart("RHBP - Growth Plus", "360")}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 17,
                  }}
                >
                  Add To Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Rhbps;
