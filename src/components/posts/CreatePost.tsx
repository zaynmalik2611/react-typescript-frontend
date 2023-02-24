import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import { Col, Container, Row } from "react-bootstrap";
import { useCreatePost } from "../../hooks/api/use-create-post";
import React, { RefObject } from "react";

export default function CreatePost() {
  const mutation = useCreatePost();
  const titleInputRef: RefObject<HTMLInputElement> = React.createRef();
  const contentInputRef: RefObject<HTMLTextAreaElement> = React.createRef();
  const userIdInputRef: RefObject<HTMLInputElement> = React.createRef();
  const formRef: RefObject<HTMLFormElement> = React.createRef();

  const makePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
      {
        content: contentInputRef.current!.value,
        title: titleInputRef.current!.value,
        userId: parseInt(userIdInputRef.current!.value),
      },
      {
        onSuccess: () => {
          formRef.current?.reset();
        },
      }
    );
  };
  return (
    <Container className="mb-4">
      <Form onSubmit={makePost} ref={formRef}>
        <Row className="justify-content-md-center justify-content-sm-center">
          <Col className="col-md-8 col-sm-9">
            <FormGroup className="mb-3" controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl
                required
                type="text"
                placeholder="Enter post title"
                ref={titleInputRef}
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
                ref={contentInputRef}
              />
            </FormGroup>
            <FormGroup className="mb-3" controlId="userId">
              <FormLabel>UserId</FormLabel>
              <FormControl
                required
                type="number"
                min={1}
                placeholder="UserId: "
                ref={userIdInputRef}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center justify-content-sm-center">
          <Col className="col-md-2 col-sm-9 offset-md-6 ">
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
    </Container>
  );
}
