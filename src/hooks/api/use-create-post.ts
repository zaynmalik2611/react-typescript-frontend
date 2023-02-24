import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GET_POSTS_KEY } from "./use-get-posts";
interface createPostDto {
  title: string;
  content: string;
  userId: number;
}

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postData: createPostDto) => {
      return axios.post("http://localhost:3000/posts", postData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSTS_KEY] });
    },
  });
};
