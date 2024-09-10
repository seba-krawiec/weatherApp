import React from 'react'
import { Container } from './Container.tsx'
import styled from 'styled-components';

export const Card = () => {
  return (
    <CardContainer
    flex
    column
    height='100%'
    >
        Card
    </CardContainer>
  )
}


const CardContainer = styled(Container)`

background-color:aliceblue;
padding: 2.4rem;
width: 13rem;
border-radius: 1.5rem;

`;