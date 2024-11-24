import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "./LogoutButton";

const HomeHeader = () => {
  return (
    <Stack.Screen
      options={{
        header: () => (
          <SafeAreaView className="bg-white">
            <View className="py-3 px-5 flex-row justify-between items-center border-b border-neutral-100">
              <Text className="text-2xl font-PoppinsSemiBold">Xapiens</Text>
              <LogoutButton />
            </View>
          </SafeAreaView>
        ),
      }}
    />
  );
};

export default HomeHeader;
