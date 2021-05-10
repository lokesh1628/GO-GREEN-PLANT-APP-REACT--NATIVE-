import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "./Firebase";
const Home = ({ navigation }) => {
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
            marginTop: 5,
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
              GO GREEN
            </Text>
          </View>

          <AntDesign
            name="logout"
            onPress={() => {
              Firebase.auth()
                .signOut()
                .then((result) => {
                  navigation.navigate("login");
                })
                .catch((err) => {});
            }}
            size={24}
            color="white"
          />
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
                marginTop: 15,
              }}
            >
              FLOWERS
            </Text>
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
              navigation.navigate("hibisu", {
                Image: "../images/hibiscus.png",
                Price: "3,599",
                Name: "Hibiscus",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/hibiscus.png")}
              style={{ height: 170, width: 160 }}
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
                HIBISCUS
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
              Price: 3,599
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                Image: "../images/orchid.png",
                Price: "1,499",
                Name: "Orchid",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/orchid.png")}
              style={{ height: 170, width: 160 }}
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
                }}
              >
                ORCHID
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
              Price: 1,499
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("rosedetails", {
                Image: "../images/orchid.png",
                Price: "999",
                Name: "DailyRose",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/dailyrose.png")}
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
                }}
              >
                DAILY ROSE
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
              Price: 999
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
            >
              ARTIFICIAL PLANTS
            </Text>
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
              navigation.navigate("minidetails", {
                Image: "../images/orchid.png",
                Price: "1,999",
                Name: "MiniPlant",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/miniplastic.png")}
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
                }}
              >
                MINI PLANT
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
              Price: 1,999
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("plamdetails", {
                Image: "../images/orchid.png",
                Price: "3,199",
                Name: "PalmTree",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/palmtree.png")}
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
                }}
              >
                PALM TREE
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
              Price: 3,199
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("bambdetail", {
                Image: "../images/orchid.png",
                Price: "1,399",
                Name: "Bamboo",
              })
            }
            style={{
              height: 250,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image
              source={require("../images/bamb.png")}
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
                }}
              >
                BAMBOO
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
              Price: 1,399
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
export default Home;
