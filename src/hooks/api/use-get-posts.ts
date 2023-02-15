import { gql, useQuery } from "@apollo/client";

export const useGetPosts = () => {
  const POSTS_QUERY = gql`
    {
      getPosts {
        id
        content
        userId
      }
    }
  `;
  const { data } = useQuery(POSTS_QUERY);
  return { posts: data };
};
