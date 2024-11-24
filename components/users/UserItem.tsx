import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { User } from "@/lib/types";
import { Link } from "expo-router";

const UserItem = ({ user }: { user: User }) => {
  return (
    <Link href={`/(app)/user/${user.id}`} asChild>
      <TouchableOpacity className="flex-row items-center py-4 px-5 border-b border-neutral-300 gap-3">
        <Image
          src={user.avatar}
          className="w-16 h-16 rounded-full object-cover"
        />
        <View>
          <Text className="text-base font-PoppinsSemiBold">
            {user.first_name} {user.last_name}
          </Text>
          <Text className="font-Poppins text-neutral-400">{user.email}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default UserItem;
