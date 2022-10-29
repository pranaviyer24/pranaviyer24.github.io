import { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import posts from "../posts";
import { useNavigate } from "react-router-dom";
const w1 = require("../work/work1.md");
interface CaseStudiesProps {
  setIsHome: (isHome: boolean) => void;
}

export const CaseStudies = (props: CaseStudiesProps) => {
  const { setIsHome } = props;
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <Row xs={12} className="mb-4">
        <h3>Case Studies</h3>
      </Row>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} lg={4} sm={6} xs={12}>
            <Card
              style={{ width: "100%" }}
              onClick={() => {
                setIsHome(false);
                navigate(post.route);
              }}
            >
              <Card.Img variant="top" src={post.thumbnail} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
