import Card from "react-bootstrap/Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "./Posts";

dayjs.extend(relativeTime);
export default function PostCard({ post }: { post: Post }) {
  const { Body, Title, Text, Footer } = Card;

  return (
    <Card className="mb-4">
      <Body>
        <Title>{post.title}</Title>
        <Text>{post.content}</Text>
      </Body>
      <Footer
        style={{ height: "25px", fontSize: "0.65em" }}
        className="text-muted small align-middle d-flex flex-column justify-content-center"
      >
        {dayjs(post.createdAt).fromNow()}
      </Footer>
    </Card>
  );
}
