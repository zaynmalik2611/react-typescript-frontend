import { gql, useQuery } from "@apollo/client";

export const useGetPosts = () => {
  const POSTS_QUERY = gql`
    {
      getPosts {
        id
        title
        content
        userId
        createdAt
      }
    }
  `;
  const { data } = useQuery<any>(POSTS_QUERY);
  return { posts: data };
};
