import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GET_POSTS_KEY = "get_posts";

export const useGetPosts = () => {
  return useQuery({
    queryKey: [GET_POSTS_KEY],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data;
    },
  });
};
