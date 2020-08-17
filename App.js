import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import LoginScreen from "./src/screen/Login";
import SignupScreen from "./src/screen/Signup";
import HomeScreen from "./src/screen/Home";

import Facebook from "./src/screen/Facebook";
import Tiktok from "./src/screen/Tiktok";
import Instagram from "./src/screen/Instagram";
//Facebook
import Buff_like_posts from "./src/screen/Buff_like_posts";
import Order_history from "./src/screen/Order_history"
import Buff_comments from "./src/screen/Buff_comments";
import Buff_follows from "./src/screen/Buff_follows";
import Buff_like_pages from "./src/screen/Buff_like_pages";
import Buff_view_videos from "./src/screen/Buff_view_videos";
const HomeTab = createBottomTabNavigator();
const FacebookStack = createStackNavigator();
const LikePost = createMaterialTopTabNavigator();



function LikePostTab() {
  return (
    <LikePost.Navigator>
      <LikePost.Screen name="Like_posts" component={Buff_like_posts} options={{
        title: 'Like Posts'
      }} />
      <LikePost.Screen name="Order History" component={Order_history} options={{
        title: 'History'
      }} />
    </LikePost.Navigator>
  );
}

function DetailFacebookStack() {
  return (
    <FacebookStack.Navigator>
      <FacebookStack.Screen name="Facebook" component={Facebook} />
      <FacebookStack.Screen name="Like_posts" component={LikePostTab} />
      <FacebookStack.Screen name="Buff_comments" component={Buff_comments} />
      <FacebookStack.Screen name="Buff_follows" component={Buff_follows} />
      <FacebookStack.Screen name="Like_pages" component={Buff_like_pages} />
      <FacebookStack.Screen name="Buff_views" component={Buff_view_videos} />
    </FacebookStack.Navigator>
  );
}
function HomeTabScreen() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Facebook"
        component={DetailFacebookStack}
        options={{
          Ionicons: ({ focused, activeTintColor }) =>
          focused ? (
            <Ionicons
              focused={focused}
              style={{ color: "tomato" }}
              name="ios-home"
            />
          ) : (
            <Ionicons
              focused={focused}
              style={{ color: "gray" }}
              name="ios-home"
            />
          ),
          
        }}

      />
      <HomeTab.Screen name="Tiktok" component={Tiktok} />
      <HomeTab.Screen name="Instagram" component={Instagram} />
    </HomeTab.Navigator>
  );
}

const AuthStack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            title: "",
          }}
        />
        <AuthStack.Screen
          name="Home"
          component={HomeTabScreen}
          options={{
            headerTransparent: true,
            headerLeft: null,
            title: "",
          }}
        />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
