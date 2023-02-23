import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetPosts } from "../../hooks/api/use-get-posts";
import PostCard from "./PostCard";
import { Container } from "react-bootstrap";
export type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
};
export default function Posts() {
  const { data: posts } = useGetPosts();

  return (
    <Container>
      <Row className="justify-content-md-center justify-content-sm-center">
        <Col className="col-sm-9 col-md-8">
          {posts !== undefined ? (
            posts.map((post: Post) => <PostCard key={post.id} post={post} />)
          ) : (
            <>No posts here</>
          )}
        </Col>
      </Row>
    </Container>
  );
}
