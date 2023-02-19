import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetPosts } from "../../hooks/api/use-get-posts";
import PostCard from "./PostCard";
export type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
};
export default function Posts() {
  const { posts } = useGetPosts();
  console.log("posts: ", posts);

  return (
    <Row className="justify-content-md-center justify-content-sm-center mt-4">
      <Col className="col-sm-9 col-md-6 ">
        {posts !== undefined ? (
          posts.getPosts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <>No posts here</>
        )}
      </Col>
    </Row>
  );
}
