import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import { Col, Container, Row } from "react-bootstrap";
import { useCreatePost } from "../../hooks/api/use-create-post";
import React, { RefObject, useEffect, useState } from "react";
import NotificationToast from "../common/NotificationToast";
import MyModal from "../common/MyModal";

export default function CreatePost() {
  const [createShow, setCreateShow] = useState(false);
  const [createNotifShow, setCreateNotifShow] = useState(false);
  const [postData, setPostData] = useState<{
    title: string;
    content: string;
    userId: string;
  }>({
    title: "",
    content: "",
    userId: "",
  });

  const mutation = useCreatePost();
  const makePost = (e: any) => {
    e.preventDefault();
    mutation.mutate(
      {
        content: postData.content,
        title: postData.title,
        userId: parseInt(postData.userId),
      },
      {
        onSuccess: () => {
          setPostData({
            title: "",
            content: "",
            userId: "",
          });
          setCreateShow(false);
          setCreateNotifShow(true);
        },
      }
    );
  };

  return (
    <Container className="mb-4">
      <div className="d-flex justify-content-center">
        <Button className="col-md-2" onClick={() => setCreateShow(true)}>
          Make Post
        </Button>
      </div>

      <MyModal
        title="Create Post"
        handleClose={() => setCreateShow(false)}
        hasFooter={false}
        show={createShow}
      >
        <Form onSubmit={makePost} className="py-2">
          <Row className="justify-content-md-center justify-content-sm-center">
            <Col className="col-md-9 col-sm-9">
              <FormGroup className="mb-3" controlId="title">
                <FormLabel>Title</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Enter post title"
                  value={postData.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup className="mb-3" controlId="content">
                <FormLabel>Content</FormLabel>
                <FormControl
                  required
                  type="text"
                  as={"textarea"}
                  placeholder="Content"
                  style={{
                    resize: "none",
                  }}
                  value={postData.content}
                  onChange={(e) =>
                    setPostData({ ...postData, content: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup className="mb-3" controlId="userId">
                <FormLabel>UserId</FormLabel>
                <FormControl
                  required
                  type="number"
                  min={1}
                  placeholder="UserId: "
                  value={postData.userId}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      userId: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center justify-content-sm-center">
            <Col className="col-md-5 col-sm-9  ">
              <Button
                className="btn-md container-fluid"
                variant="primary"
                type="submit"
              >
                Post
              </Button>
            </Col>
          </Row>
        </Form>
      </MyModal>
      <NotificationToast
        onClose={() => setCreateNotifShow(false)}
        toastShow={createNotifShow}
        toastTitle={"Post Created"}
        toastVariant={"info"}
      />
    </Container>
  );
}
