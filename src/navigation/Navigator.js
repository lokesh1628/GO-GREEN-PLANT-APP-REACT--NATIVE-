import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import splash from "../screens/splash";
import login from "../screens/login";
import Home from "../screens/Home";
import Seed from "../screens/Seed";
import Fertilizer from "../screens/Fertilizer";
import bambdetail from "../screens/bambdetail";
import hibisu from "../screens/hibisu";
import minidetails from "../screens/minidetails";
import plamdetails from "../screens/plamdetails";
import rosedetails from "../screens/rosedetails";
import Detail from "../screens/Detail";
import Cart from "../screens/More";
import Register from "../screens/Register";
import order from "../screens/order";
import gseed from "../screens/gseed";
import cseed from "../screens/cseed";
import sunseed from "../screens/sunseed";
import pseed from "../screens/pseed";
import vermidetails from "../screens/vermidetails";
import Rhbps from "../screens/Rhbps";
import fermones from "../screens/fermones";
import fersea from "../screens/fersea";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#00a46c",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Seed"
        component={Seed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="seed" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Fertilizer"
        component={Fertilizer}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ green, size }) => (
            <Fontisto name="shopping-bag" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ green, size }) => (
            <FontAwesome name="opencart" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="splash" component={splash} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="bambdetail" component={bambdetail} />
      <Stack.Screen name="hibisu" component={hibisu} />
      <Stack.Screen name="minidetails" component={minidetails} />
      <Stack.Screen name="plamdetails" component={plamdetails} />
      <Stack.Screen name="rosedetails" component={rosedetails} />
      <Stack.Screen name="Seed" component={Seed} />
      <Stack.Screen name="gseed" component={gseed} />
      <Stack.Screen name="pseed" component={pseed} />
      <Stack.Screen name="cseed" component={cseed} />
      <Stack.Screen name="sunseed" component={sunseed} />
      <Stack.Screen name="Fertilizer" component={Fertilizer} />
      <Stack.Screen name="vermidetails" component={vermidetails} />
      <Stack.Screen name="Rhbps" component={Rhbps} />
      <Stack.Screen name="fermones" component={fermones} />
      <Stack.Screen name="fersea" component={fersea} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="order" component={order} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
