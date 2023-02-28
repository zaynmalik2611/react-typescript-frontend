import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetPosts } from "../../hooks/api/use-get-posts";
import PostCard from "./PostCard";
import { Container, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import NotificationToast from "../common/NotificationToast";
export type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
  commentsCount: number;
};
export default function Posts() {
  const { data: posts } = useGetPosts();
  const [deleteNotifShow, setDeleteNotifShow] = useState(false);

  return (
    <Container>
      <Row className="justify-content-md-center justify-content-sm-center">
        <Col className="col-sm-9 col-md-8">
          {posts !== undefined ? (
            posts.map((post: Post) => (
              <PostCard
                key={post.id}
                post={post}
                setDeleteNotifShow={setDeleteNotifShow}
              />
            ))
          ) : (
            <>No posts here</>
          )}
        </Col>
      </Row>
      <NotificationToast
        onClose={() => setDeleteNotifShow(false)}
        toastShow={deleteNotifShow}
        toastTitle={"Post Deleted"}
        toastVariant={"danger"}
      />
    </Container>
  );
}
