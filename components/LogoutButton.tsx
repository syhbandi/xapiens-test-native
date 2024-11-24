import { useAuth } from "@/context/authContext";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

const LogoutButton = () => {
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    Alert.alert("Warning!", "You are going to Logout", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: doSignOUt },
    ]);
  };

  const doSignOUt = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      Alert.alert("Error", "Failed to log you out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="z-10 h-10 px-3 bg-white border border-neutral-200 rounded-lg items-center justify-center"
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={"blue"} />
      ) : (
        <Text>Logout</Text>
      )}
    </TouchableOpacity>
  );
};

export default LogoutButton;
