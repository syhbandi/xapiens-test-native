import useGetUsers from "@/hooks/useGetUsers";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import UserItem from "./UserItem";

const UserList = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
  } = useGetUsers();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderFooter = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator size="large" color="blue" />;
    }
    return null;
  };

  if (isLoading && !isRefreshing) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  if (isError) {
    return (
      <View className="px-5">
        <Text className="font-[NunitoSemiBold] text-red-600 text-center">
          Oops! an error accured, please try again
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={data?.pages.flatMap((page) => page.data) || []}
      keyExtractor={(item, index) => item.id.toString() + index.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
      ListFooterComponent={renderFooter}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={() => (
        <View className="px-5">
          <Text className="font-[NunitoSemiBold] text-neutral-600 text-center text-lg">
            Oops! no contacts found
          </Text>
        </View>
      )}
    />
  );
};

export default UserList;
