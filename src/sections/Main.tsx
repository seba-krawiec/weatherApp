import React from 'react'
import { Card, Container, Maincard, Navbar } from '../components'
import styled, { useTheme } from 'styled-components'


interface MainProps {
  onChange?: () => void,
  children?:  React.ReactNode ,
}

export const Main = ({onChange}):MainProps => {

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
            <ExtraData flex width="100%" align="center" height="16rem" justify='space-between'>
              <div>
                sensacion termica
              </div>
              <div>
                humedad
              </div>
              <div>
                precipitaciones
              </div>
              <div>
                velocidad del viento
              </div>
              <div>
                salida del sol
              </div>
              <div>
                puesta del sol
              </div>
            </ExtraData>
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

const ExtraData = styled(Container)`
background-color:${(p) => p.theme.colors.orange200};
border-radius: ${(p) => p.theme.borderRadius.common};
box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange200))};
height: 20rem;
padding: ${(p) => `${p.theme.paddings.medium} ${p.theme.paddings.large}`};
`;