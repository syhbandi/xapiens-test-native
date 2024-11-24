import api from "@/axios";
import { User } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const getUser = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export default function useGetUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    select: ({ data }): User => data,
  });
}
