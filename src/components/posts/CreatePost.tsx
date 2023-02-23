import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import { Col, Container, Row } from "react-bootstrap";

export default function CreatePost() {
  const makePost = (e: any) => {
    e.preventDefault();
  };
  return (
    <Container className="mb-4">
      <Form onSubmit={makePost}>
        <Row className="justify-content-md-center justify-content-sm-center">
          <Col className="col-md-8 col-sm-9">
            <FormGroup className="mb-3" controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl
                required
                type="text"
                placeholder="Enter post title"
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
              />
            </FormGroup>
            <FormGroup className="mb-3" controlId="userId">
              <FormLabel>UserId</FormLabel>
              <FormControl
                required
                type="number"
                min={1}
                placeholder="Content"
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
