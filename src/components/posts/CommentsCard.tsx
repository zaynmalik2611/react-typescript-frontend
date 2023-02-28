import { ListGroup } from "react-bootstrap";
import { useGetComments } from "../../hooks/api/use-get-comments";

export type Comment = {
  id: number;
  content: string;
  userId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function CommentsCard({ postId }: { postId: number }) {
  const { data: comments } = useGetComments({
    skip: 0,
    take: 10,
    postId: postId,
  });
  return (
    <ListGroup>
      {comments !== undefined ? (
        comments.map((comment: Comment) => (
          <ListGroup.Item key={comment.id}>{comment.content}</ListGroup.Item>
        ))
      ) : (
        <>No comments here</>
      )}
    </ListGroup>
  );
}
