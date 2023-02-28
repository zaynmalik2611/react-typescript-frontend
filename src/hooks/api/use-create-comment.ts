import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GET_COMMENTS_KEY } from "./use-get-comments";

interface createCommentDto {
  content: string;
  postId: number;
  userId: number;
}

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentData: createCommentDto) => {
      return axios.post("http://localhost:3000/comments", commentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_COMMENTS_KEY] });
    },
  });
};
