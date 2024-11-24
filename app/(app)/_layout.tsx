import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";
import { Redirect, Stack } from "expo-router";

const HomeLayout = () => {
  const { user } = useAuth();

  if (!user) return <Redirect href={"/signin"} />;

  return <Stack screenOptions={{ animation: "ios_from_right" }} />;
};

export default HomeLayout;
