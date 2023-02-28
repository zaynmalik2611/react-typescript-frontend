import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GET_COMMENTS_KEY = "get_comments";

export const useGetComments = (query: {
  skip: number;
  take: number;
  postId: number;
}) => {
  return useQuery({
    queryKey: [GET_COMMENTS_KEY],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3000/comments/get-comments-by-post",
        {
          params: {
            skip: query.skip,
            take: query.take,
            postId: query.postId,
          },
        }
      );
      return response.data;
    },
    retry: false,
  });
};
