import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
const Seed = ({ navigation }) => {
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
            marginTop: 10,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 30,
                marginTop: 20,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Seeds
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61",
                marginTop: 5,
              }}
            ></Text>
            <View
              style={{
                height: 4,
                //backgroundColor: "#b1e5d3",
                width: 100,
                marginTop: 40,
              }}
            ></View>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 400 }}
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("gseed", {
                Image: "../images/hibiscus.png",
                Price: "80",
                Name: "Ground Mustard",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 30,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/mustrad.png")}
              style={{ height: 160, width: 160 }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  width: 200,
                }}
              >
                Ground Mustrad
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 35,
                }}
              ></Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3,
              }}
            >
              Price:80
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("cseed", {
                Image: "../images/hibiscus.png",
                Price: "50",
                Name: "Cotton",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 40,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/cotton.png")}
              style={{ height: 160, width: 160 }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  width: 200,
                }}
              >
                Cotton
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 45,
                }}
              ></Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3,
              }}
            >
              Price:50
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: -120,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61",
                marginTop: 50,
              }}
            ></Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 400 }}
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("pseed", {
                Image: "../images/hibiscus.png",
                Price: "40",
                Name: "Pumpkin",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 30,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/pumpkin.png")}
              style={{ height: 160, width: 160 }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  width: 200,
                }}
              >
                Pumpkin
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 35,
                }}
              ></Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3,
              }}
            >
              Price:40
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("sunseed", {
                Image: "../images/hibiscus.png",
                Price: "100",
                Name: "Sunflower",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 40,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/sunflower.png")}
              style={{ height: 160, width: 160 }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  width: 200,
                }}
              >
                Sunflower
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 35,
                }}
              ></Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3,
              }}
            >
              price:100
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
export default Seed;
