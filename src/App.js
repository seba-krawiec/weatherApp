import styled from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png";
import { About, Explanation, Contact, Main } from "./sections";
import { useEffect, useState } from "react";

function App() {
  return (
    <AppContainer align={"center"} padding={"0px 24px"} style={{ gap: "24px" }}>
      <Main />
      <Explanation />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Container)`
  background-image: url(${backgroundPattern});
  background-size: 6%;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`;
