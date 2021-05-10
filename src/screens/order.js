import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  Alert,
  Picker,
} from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Firebase from "./Firebase";

const orderplaced = (
  name,
  phone,
  address,
  city,
  pincode,
  count,
  Name,
  price
) => {
  var email = Firebase.auth().currentUser.email;
  var email1 = email.split("@").join("_");
  var email2 = email1.split(".").join("-");
  var email3 = email2.split(".").join("-");
  Firebase.database()
    .ref()
    .child(email3)
    .child("orders")
    .child(Name)
    .set({
      UserName: name,
      phone: phone,
      address: address,
      city: city,
      pincode: pincode,
      Price: price * count,
    })
    .then((result) => {
      alert("Order Placed");
    })
    .catch((err) => {});
};

const order = ({ navigation, route }) => {
  const [Bags, setBags] = useState("Bags ");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [selected, setsle] = useState("");
  const [pincode, setpincode] = useState("");
  const { Name, Price } = route.params;
  console.log(Name);
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 25,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Place Order
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(val) => setname(val)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Phone number"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(val) => setphone(val)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Address"
          placeholderTextColor="#9a73ef"
          //autoCapitalize="none"
          onChangeText={(val) => setaddress(val)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="City"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(val) => setcity(val)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Pincode"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(val) => setpincode(val)}
        />
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Selected:
        </Text>
        <Picker
          selectedValue={Bags}
          onValueChange={(currentBags) => setBags(currentBags)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            orderplaced(name, phone, address, city, pincode, Bags, Name, Price)
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  input: {
    marginLeft: 20,
    marginRight: 30,
    margin: 10,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    marginLeft: 20,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "white",
  },
});

export default order;
