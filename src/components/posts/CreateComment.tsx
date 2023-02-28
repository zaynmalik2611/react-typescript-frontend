import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useCreateComment } from "../../hooks/api/use-create-comment";

type CreateCommentProps = {
  postId: number;
  setShowCommentInput: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CreateComment({
  postId,
  setShowCommentInput,
}: CreateCommentProps) {
  const [comment, setComment] = useState("");
  const { mutate: mutateComment } = useCreateComment();

  const submitComment = (e: any) => {
    e.preventDefault();
    mutateComment(
      {
        content: comment,
        postId: postId,
        userId: 1,
      },
      {
        onSuccess: () => {
          setShowCommentInput(false);
          setComment("");
        },
      }
    );
  };

  return (
    <Form onSubmit={submitComment}>
      <FormControl
        required
        type="text"
        placeholder="Add comment here..."
        className="rounded-0 rounded-bottom"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </Form>
  );
}
