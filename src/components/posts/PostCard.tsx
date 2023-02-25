import Card from "react-bootstrap/Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "./Posts";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { useState } from "react";
import ConfirmDialog from "../common/ConfirmDialog";
import { useDeletePost } from "../../hooks/api/use-delete-post";
import { Toast, ToastContainer } from "react-bootstrap";

dayjs.extend(relativeTime);
export default function PostCard({
  post,
  setDeleteShow,
}: {
  post: Post;
  setDeleteShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { Body, Title, Text, Footer } = Card;
  const { mutate } = useDeletePost();
  const [show, setShow] = useState(false);

  const deletePost = () => {
    mutate(post.id, {
      onSuccess: () => {
        setShow(false);
        setDeleteShow(true);
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
              <ConfirmDialog
                actionTitle="Delete"
                closeTitle="No"
                actionVariant="danger"
                title="Delete Post"
                handleClose={() => setShow(false)}
                actionFunction={deletePost}
                body={"Do you want to delete this post?"}
                show={show}
              />
            </DropdownMenu>
          </Dropdown>
        </div>

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
