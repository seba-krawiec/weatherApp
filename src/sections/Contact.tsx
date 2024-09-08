import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Container } from '../components'


export const Contact = () => {

  const theme = useTheme();

  return (
    <Container
      flex
    width={"100%"}
    height={"100vh"}
    style={{backgroundColor:"coral"}}
    >
      contact
    </Container>
  )
}
