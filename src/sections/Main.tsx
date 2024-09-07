import React from 'react'
import { Container, Maincard } from '../components'
import styled, { useTheme } from 'styled-components'

export const Main = () => {

    const theme = useTheme();

    const handleClick = () => {

        console.log("choto mate")
    
      };

  return (
    <Container
    flex
    column
    width={"100%"}
    height={"100vh"}
    justify={"space-between"}
    style={{gap:theme.gaps.cardStreets, padding:`${theme.paddings.large} 0`, scrollSnapAlign:"start"}}
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
          <button onClick={handleClick}>volver a hoy</button>
        </Container>
        <Container flex justify="space-between" align="center">
            cards
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
 padding: 2.4rem;
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
`;