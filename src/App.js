import styled from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png";
import { About, Explanation, Contact, Main } from "./sections";

function App({ onChange }) {
  return (
    <AppContainer align={"center"} padding={"0px 24px"} style={{ gap: "24px" }}>
      <Main onChange={onChange} />
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
  scroll-behavior: smooth !important;
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`;
