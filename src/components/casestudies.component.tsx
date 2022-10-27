import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import posts from "../posts";
const w1 = require("../work/work1.md");

export const CaseStudies = () => {
  const [open, setopen] = useState(false);
  const [postContent, setpostContent] = useState("");
  useEffect(() => {
    import(w1).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setpostContent(res))
        .catch((err) => console.error(err));
    });
  });
  return (
    <Container>
      <Row xs={12} className="mb-4">
        <h3>Case Studies</h3>
      </Row>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} lg={4} sm={6} xs={12}>
            <Card style={{ width: "100%" }} onClick={() => setopen(true)}>
              <Card.Img variant="top" src={post.thumbnail} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={open} onHide={() => setopen(false)} style={{ width: "90%" }}>
        <Markdown>{postContent}</Markdown>
      </Modal>
    </Container>
  );
};
