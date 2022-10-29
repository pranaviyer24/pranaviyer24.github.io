import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
const w1 = require("../work/work1.md");
const w2 = require("../work/work2.md");
const w3 = require("../work/work3.md");
const w4 = require("../work/work4.md");
const w5 = require("../work/work5.md");
const w6 = require("../work/work6.md");
interface PostProps {
  filePath: string;
}

const Post = (props: PostProps) => {
  const { filePath } = props;
  const [postContent, setpostContent] = useState("");
  useEffect(() => {
    const w =
      filePath === "Work1"
        ? w1
        : filePath === "Work1"
        ? w2
        : filePath === "Work1"
        ? w3
        : filePath === "Work1"
        ? w4
        : filePath === "Work1"
        ? w5
        : filePath === "Work1"
        ? w6
        : w1;
    fetch(w1)
      .then((res) => res.text())
      .then((res) => setpostContent(res))
      .catch((err) => console.error(err));
  });
  return (
    <Container className="justify-content-center align-items-center">
      <Row md={10} xs={12}>
        <Markdown>{postContent}</Markdown>
      </Row>
    </Container>
  );
};

export default Post;
