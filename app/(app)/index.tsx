import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import UserList from "@/components/users/UserList";

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Xapiens",
          headerShadowVisible: false,
        }}
      />
      <View className="flex-1 bg-white">
        <UserList />
      </View>
    </>
  );
};

export default Home;
