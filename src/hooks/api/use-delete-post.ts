import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GET_POSTS_KEY } from "./use-get-posts";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId: number) => {
      return axios.delete(`http://localhost:3000/posts/${postId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSTS_KEY] });
    },
  });
};
