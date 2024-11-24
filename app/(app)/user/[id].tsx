import { View, Text, ActivityIndicator, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import useGetUser from "@/hooks/useGetUser";
import { SafeAreaView } from "react-native-safe-area-context";

const UserDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isLoading, isError, data } = useGetUser(id);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ title: "", headerShadowVisible: false }} />
      {isLoading ? (
        <View className="flex-1 bg-white items-center justify-center">
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      ) : isError ? (
        <View className="flex-1 bg-white items-center justify-center">
          <Text className="text-2xl font-PoppinsMedium">Oops!</Text>
          <Text className="text-base font-Poppins">An error accured</Text>
        </View>
      ) : (
        <View className="flex-1 px-5 items-center">
          <Image
            source={{ uri: data?.avatar }}
            className="h-32 w-32 object-cover rounded-full mb-5"
          />
          <Text className="font-PoppinsSemiBold text-xl text-center">
            {data?.first_name} {data?.last_name}
          </Text>
          <Text className="font-Poppins text-base text-neutral-400 text-center">
            {data?.email}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserDetail;
