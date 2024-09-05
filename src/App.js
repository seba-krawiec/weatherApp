import styled, { useTheme } from "styled-components";
import { Container } from "./components";
import backgroundPattern from "./assets/backgroundPattern.png";
import { sunny, cloudy, rainy, rainy_storm, storm, day_cloudy, day_rainy } from "./assets/images/all";



function App() {

  const theme = useTheme();

  const handleImage = (weather) => {

    const imageByWeather = {
      sun : sunny,
      cloud: cloudy,
      rain: rainy,
      rainyStorm: rainy_storm,
      dayCloudy: day_cloudy,
      dayRainy: day_rainy,
      storm,
    }

    return imageByWeather[weather];

  }


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
      style={{gap:theme.gaps.cardStreets, padding:`${theme.paddings.large} 0`}}
      >
        <UpRow
        flex
        justify={"space-between"}
        >
          
          <MainCard
          flex 
          column
          justify="space-between"
          align="center"
          >
            <MainFigure>
              <div>

              <img src={handleImage("dayCloudy")} alt="weather today"/>
              </div>
              <figcaption>
                <span>23ºC</span>
                <span>min:16ºC max:25ºC</span>
                <span>precipitaciones: 90%</span>
                <span>humedad: 10%</span>

              </figcaption>
            </MainFigure>
              
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
          <Container flex column justify="space-between" align="center">
            <h2>tiempo extendido 7 dias</h2>
            <button>volver a hoy</button>
          </Container>
          <Container flex justify="space-between" align="center">
              cards
          </Container>
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
height:100%;
gap:${(p) => p.theme.gaps.cardStreets};
`;

const BottomRow = styled(Container)`
background-color:${(p) => p.theme.colors.orange500};
 height:35%;
 box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange500))};
 border-radius: 1.5rem;
 padding: 2.4rem;
`;


const MainCard = styled(Container)`

background-color:${(p) => p.theme.colors.orange300};
 width:30%;
 border-radius: ${(p) => p.theme.borderRadius.common};
 padding: 3rem 2.5rem;
 box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange300))};
`;

const MainFigure = styled.figure`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: white;

  div {
    width: 33rem;;
  }

  img{
    width: 100%;
  }

  figcaption{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span:first-child {
     font-size : 10rem;
     font-weight: 600;
     margin-bottom: ${(p) => p.theme.margins.large};
    }
    span {
      font-size : 2.6rem;
     font-weight: 400;
     margin-bottom: ${(p) => p.theme.margins.small};
    }


  }
`;

const RightWrapper = styled(Container)`
width:100%;
gap: ${(p) => p.theme.gaps.cardStreets};
`;

const ExtraData = styled(Container)`
background-color:${(p) => p.theme.colors.orange200};
border-radius: ${(p) => p.theme.borderRadius.common};
box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange200))};
height: 20rem;
`;
