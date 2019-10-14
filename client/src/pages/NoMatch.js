import React from "react";
import Container from "../components/Container";

function NoMatch() {
  return (
    <Container fluid>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
              </span>
      </h1>
    </Container>
  );
}

export default NoMatch;
