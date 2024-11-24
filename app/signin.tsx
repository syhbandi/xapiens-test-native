import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/authContext";

const signin = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (loading) return;
    if (!email || !password) {
      Alert.alert("Warning!", "Invalid input");
      return;
    }

    setLoading(true);
    try {
      await signIn(email, password);
      router.replace("/(app)");
    } catch (error) {
      Alert.alert("Error", "Invalid Credentials");
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="px-6 flex-1">
        <Text className="text-3xl font-PoppinsSemiBold text-center mt-20">
          Login
        </Text>

        {/* form */}
        <View className="gap-5 mt-10 items-center">
          <View className="flex-row items-center h-12 gap-2 bg-white rounded-lg border-b border-neutral-300">
            <Feather name="mail" size={20} color={"#d4d4d4"} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              className="flex-1 font-Poppins"
              autoComplete={"off"}
            />
          </View>
          <View className="flex-row items-center h-12  gap-2 bg-white rounded-lg border-b border-neutral-300">
            <Feather name="lock" size={20} color={"#d4d4d4"} />
            <TextInput
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              className="flex-1 font-Poppins"
            />
          </View>
          <TouchableOpacity
            className="h-12 px-20 rounded-full bg-sky-500 items-center justify-center"
            onPress={handleSignIn}
          >
            {loading ? (
              <ActivityIndicator size={30} color={"white"} />
            ) : (
              <Text className="text-base font-PoppinsMedium text-white">
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signin;
