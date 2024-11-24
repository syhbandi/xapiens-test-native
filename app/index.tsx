import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";
import { Link, Redirect } from "expo-router";

const Home = () => {
  const auth = useAuth();

  if (auth.loading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );

  if (auth.user) return <Redirect href={"/(app)"} />;

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-3xl font-PoppinsSemiBold">Xapiens Test</Text>
      <Text className="font-Poppins">A simple User manager</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity className="mt-5 h-12 rounded-full bg-sky-500 items-center justify-center px-5">
          <Text className="text-white font-PoppinsSemiBold text-base">
            Get Started
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Home;
