import api from "@/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const getUsers = async (page: number) => {
  const { data } = await api.get(`/users?page=${page}`);
  return data;
};

const useGetUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam }) => getUsers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });
};

export default useGetUsers;
