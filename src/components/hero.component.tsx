import * as React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

interface HeroProps {}

const Hero = (props: HeroProps) => {
  return (
    <Container
      className="justify-content-center align-items-center"
      style={{ height: "90vh", width: "100%" }}
    >
      <Row
        className="justify-content-center align-items-center text-center p-4"
        style={{ height: "100%" }}
      >
        <div style={{ display: "block" }}>
          <h1>Hi, I'm Pranav</h1>
          <h4>
            I'm a designer and developer, working to make the world a better
            place
          </h4>
        </div>
      </Row>
    </Container>
  );
};

export default Hero;
