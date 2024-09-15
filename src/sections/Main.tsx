import React from 'react'
import { Card, Container, Maincard, Navbar } from '../components'
import styled, { useTheme } from 'styled-components'
import { icons } from '../assets/icons';


const { Humidity,
  FeelsLike,
  Precipitations,
  Sunrise,
  Sunset,
  Wind} = icons;

interface MainProps {
  onChange?: () => void,
  children?:  React.ReactNode ,
}

interface ExtraData {
  label?: string,
  icon?: React.ReactNode,
  data?: string
}

const extraData:ExtraData[] = [
  {
    label:"sensacion termica",
    icon:<FeelsLike/>,
    data:"25º",

  },
  {
    label:"humedad",
    icon:<Humidity/>,
    data:"90%",

  },
  {
    label:"precipitaciones",
    icon:<Precipitations/>,
    data:"10%",

  },
  {
    label:"velocidad del viento",
    icon:<Wind/>,
    data:"20km/h",

  },
  {
    label:"salida del sol",
    icon:<Sunrise/>,
    data:"10:00 am",

  },
  {
    label:"puesta del sol",
    icon:<Sunset/>,
    data:"08:00 pm",

  }
]

export const Main = ({onChange}:MainProps) => {

    const theme = useTheme();



    const handleClick = () => {
      console.log("parkour")
    }


  return (
    <Container
    flex
    column
    width={"100%"}
    height={"100vh"}
    justify={"space-between"}
    style={{gap:theme.gaps.cardStreets, padding:`${theme.paddings.large} 0`, scrollSnapAlign: "start"}}
    >
      <UpRow
      flex
      justify={"space-between"}
      >
        <Maincard/>
      
        <RightWrapper 
        flex
        column
        justify={"space-between"}
        align={"center"}
        >
            <Navbar/>
            <Container flex width="100%" height="100%" style={{backgroundColor:"red"}}>
            graphic
            </Container>
            <Container flex width="100%" align="center" height="16rem" justify='space-between'>

            {extraData.map(({label, icon, data}, index) => {
              return (

                <ExtraDataCard key={index} flex column align='center' justify='space-between'>
                <h2>{label?.toUpperCase()}</h2>
                <Wrapper>
                <div>{icon}</div>
                <span>{data}</span>
                </Wrapper>
              </ExtraDataCard>
              )
            })}
            </Container>
        </RightWrapper>

      </UpRow>
      
      <BottomRow flex justify={"space-between"} align={"center"}>
        <Container flex column justify="space-between" align="center">
          <h2>tiempo extendido 7 dias</h2>
          <button onClick={handleClick}>volver a hoy</button>
        </Container>
        <Container flex justify="space-between" align="center" height='100%' width='70%'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </Container>
      </BottomRow>

    </Container>
  )
}


const UpRow = styled(Container)`
height:100%;
gap:${(p) => p.theme.gaps.cardStreets};
`;

const BottomRow = styled(Container)`
background-color:${(p) => p.theme.colors.orange500};
 height:35%;
 box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange500))};
 border-radius: 1.5rem;
 padding: 2.4rem 10rem;
`;



const RightWrapper = styled(Container)`
width:100%;
gap: ${(p) => p.theme.gaps.cardStreets};
`;

const ExtraDataCard = styled(Container)`

background-color:${(p) => p.theme.colors.orange200};
  padding: 2rem;
  border-radius: 1.5rem;
  flex-wrap: wrap;
  width: 20rem;
  height: 100%;
  box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange200))};

  h2{
  display: inline-block;
  min-width: 50%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
}

`;

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;



svg{
  width: 3rem;
  height: 3rem;
}

span{
  line-break: auto;
  font-size: 1.5rem;
}
`;