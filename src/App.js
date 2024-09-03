import styled, { useTheme } from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png"



function App() {

  const theme = useTheme();

  return (

    <AppContainer
    flex
    column
    height={"fit-content"}
    align={"center"}
    padding={"0px 24px"}
    >
      <Container
      flex
      column
      width={"100%"}
      height={"100vh"}
      justify={"space-between"}
      style={{gap:theme.gaps.cardStreets}}
      >
        <UpRow
        flex
        justify={"space-between"}
        >
          
          <MainCard
          flex 
          column
          justify={"space-between"}
          >
              right
          </MainCard>
          <RightWrapper 
          flex
          column
          justify={"space-between"}
          align={"center"}
          >
              <Container flex width="20rem" height="3rem" self="flex-end" align="center" style={{backgroundColor:"lightcoral"}}>
                nav
              </Container>
              <Container>
              graphic
              </Container>
              <ExtraData flex width="100%" align="center" height="10rem">
                extra data
              </ExtraData>
          </RightWrapper>

        </UpRow>
        
        <BottomRow flex justify={"space-between"} align={"center"}>
          second body
        </BottomRow>

      </Container>
      <Container
      
      width={"100%"}
      height={"100vh"}
      style={{backgroundColor:"orange"}}
      >explination
      </Container>
      
      <Container
      
      width={"100%"}
      height={"100vh"}
      style={{backgroundColor:"gray"}}
      >about this
      </Container>
    </AppContainer>
  
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

const UpRow = styled(Container)`
margin-top:${(p) => p.theme.margins.large}; 
height:100%;
gap:${(p) => p.theme.gaps.cardStreets};
`;

const BottomRow = styled(Container)`
background-color:${(p) => p.theme.colors.orange500};
 margin-bottom:${(p) => p.theme.margins.large}; 
 height:40%;
 box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange500))};
`;


const MainCard = styled(Container)`

background-color:${(p) => p.theme.colors.orange300};
 width:35%;
 border-radius: ${(p) => p.theme.borderRadius.common};
 padding: 24px 25px 24px 40px;
 box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange300))};
`;

const RightWrapper = styled(Container)`
width:100%;
gap: ${(p) => p.theme.gaps.cardStreets};
`;

const ExtraData = styled(Container)`
background-color:${(p) => p.theme.colors.orange200};
border-radius: ${(p) => p.theme.borderRadius.common};
box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange200))};
`;