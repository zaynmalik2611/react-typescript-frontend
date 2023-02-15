import { useGetPosts } from "../../hooks/api/use-get-posts";

export default function Posts() {
  const { posts } = useGetPosts();
  console.log("posts: ", posts);

  if (posts !== undefined) {
    return posts.getPosts.map((post: any) => (
      <div key={post.id}>{post.content}</div>
    ));
  } else {
    return <>No posts here</>;
  }
}
