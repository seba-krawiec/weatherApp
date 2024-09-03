import styled from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png"



const fatherExtraStyles = {

}

console.log(backgroundPattern)

function App() {
  return (
    <>
    
    <AppContainer
    flex
    column
    height={"fit-content"}
    extraStyles={fatherExtraStyles}
    align={"center"}
    padding={"0px 24px"}
    >
      <Container
      flex
      column
      width={"100%"}
      height={"100vh"}
      justify={"space-between"}
      style={{gap:"37px"}}
      >
        <Container style={{backgroundColor:"blue", marginTop:"24px", height:"100%"}}>first boy</Container>
        <Container style={{backgroundColor:"orange", marginBottom:"24px", height:"30%"}}>second body</Container>

      </Container>
      <Container
      
      width={"100%"}
      height={"100vh"}
      style={{backgroundColor:"orange"}}
      >explination</Container>
      <Container
      
      width={"100%"}
      height={"100vh"}
      style={{backgroundColor:"gray"}}
      >about this</Container>
    </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled(Container)`
background-image: url(${backgroundPattern});
background-size: 6%;
  scrollbar-width: none;
  &:-webkit-scrollbar {
  display: none;
}
`;
