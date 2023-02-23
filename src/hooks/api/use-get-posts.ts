import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data;
    },
  });
};
