import React from "react";
import styled, { useTheme } from "styled-components";
import { Container } from "../components";

export const Explanation = () => {
  const theme = useTheme();

  return (
    <Container
      flex
      column
      align="center"
      width={"100%"}
      height={"100vh"}
      gap="3rem"
      style={{ scrollSnapAlign: "start" }}
      padding="4rem 0"
    >
      <Container
        flex
        width="100%"
        height="30%"
        style={{ backgroundColor: "orange" }}
      >
        <p>explicacion del proyecto</p>
        <Container width="20rem">
          <img src="" alt="foto explicacion 1" />
        </Container>
      </Container>
      <Container
        flex
        width="100%"
        height="30%"
        style={{ flexDirection: "row-reverse", backgroundColor: "orangered" }}
      >
        <p>explicacion del proyecto 2</p>
        <Container width="20rem">
          <img src="" alt="foto explicacion 1" />
        </Container>
      </Container>
    </Container>
  );
};
