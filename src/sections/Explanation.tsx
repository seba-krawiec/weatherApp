import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Container } from '../components'


export const Explanation = () => {

  const theme = useTheme();

  return (
    <Container
      flex
    width={"100%"}
    height={"100vh"}
    >
      <div style={{backgroundColor:"orange",height:"100%", width:"100%",  scrollSnapAlign: "start"}}>
        explanation
      </div>
    </Container>
  )
}
