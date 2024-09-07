import styled from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png";
import { About, Explanation, Contact, Main } from "./sections";



function App() {


  return (
    
    <AppContainer
    flex
    column
    align={"center"}
    padding={"0px 24px"}
    >
      <Main/>
      <Explanation/>
      <About/>
      <Contact/>   
 
    </AppContainer>
  
  );
}

export default App;

const AppContainer = styled(Container)`
background-image: url(${backgroundPattern});
background-size: 6%;
/* scroll-snap-type: y mandatory; */
/* overflow-y: scroll; */
  scrollbar-width: none;
  &:-webkit-scrollbar {
  display: none;
}
`;


