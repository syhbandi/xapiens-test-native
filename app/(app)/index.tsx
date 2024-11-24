import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import UserList from "@/components/users/UserList";
import LogoutButton from "@/components/LogoutButton";
import HomeHeader from "@/components/HomeHeader";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <UserList />
    </View>
  );
};

export default Home;
