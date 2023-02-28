import Card from "react-bootstrap/Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "./Posts";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { useState } from "react";
import MyModal from "../common/MyModal";
import { useDeletePost } from "../../hooks/api/use-delete-post";
import {
  Button,
  Container,
  Form,
  FormControl,
  ListGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useCreateComment } from "../../hooks/api/use-create-comment";
import { useGetComments } from "../../hooks/api/use-get-comments";
import CommentsCard from "./CommentsCard";
import CreateComment from "./CreateComment";

dayjs.extend(relativeTime);
export default function PostCard({
  post,
  setDeleteNotifShow,
}: {
  post: Post;
  setDeleteNotifShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { Body, Title, Text, Footer } = Card;
  const { mutate } = useDeletePost();
  const [show, setShow] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const deletePost = () => {
    mutate(post.id, {
      onSuccess: () => {
        setShow(false);
        setDeleteNotifShow(true);
      },
    });
  };

  return (
    <Card className="mb-4">
      <Body>
        <div className="d-flex justify-content-between">
          <Title>{post.title}</Title>
          <Dropdown>
            <DropdownToggle
              id="dropdown-basic-button"
              variant="secondary"
              size="sm"
              title=""
            ></DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setShow(true)}>Delete</DropdownItem>
              <MyModal
                actionTitle="Delete"
                closeTitle="No"
                actionVariant="danger"
                title="Delete Post"
                hasFooter={true}
                handleClose={() => setShow(false)}
                actionFunction={deletePost}
                show={show}
              >
                <p>Do you want to delete this post?</p>
              </MyModal>
            </DropdownMenu>
          </Dropdown>
        </div>

        <Text>{post.content}</Text>
      </Body>
      <Footer
        style={{ height: "25px", fontSize: "0.65em" }}
        className=" small d-flex flex-column justify-content-center"
      >
        <div className="d-flex justify-content-between">
          <p
            className="mb-0 text-primary user-select-none fw-bolder"
            role="button"
            onClick={() => setShowCommentInput(true)}
          >
            Add Comment
          </p>
          <p
            className={`mb-0 ${
              post.commentsCount ? "text-primary" : "text-secondary"
            } `}
            role={post.commentsCount ? "button" : ""}
            onClick={() => setShowComments(!showComments)}
          >
            {!post.commentsCount
              ? `No comments here`
              : `View ${post.commentsCount} comment(s)`}
          </p>
          <p className="text-muted mb-0">{dayjs(post.createdAt).fromNow()}</p>
        </div>
      </Footer>
      {/* <input type="text" /> */}
      {showCommentInput && (
        <CreateComment
          postId={post.id}
          setShowCommentInput={setShowCommentInput}
        />
      )}
      {showComments && <CommentsCard postId={post.id} />}
    </Card>
  );
}
