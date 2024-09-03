import React from 'react'
import styled from 'styled-components'
import { classicNameResolver } from 'typescript';

interface Container {
width:string,
height:string,
flex:string,
column: string,
justify:string, 
align: string,
padding: string,
margin: string,
extraStyles: string,
children: React.ReactElement | JSX.Element
class:"string"
}

export const Container = styled.div<Container>`

width: ${(p) => p.width && p.width};
height: ${(p) => p.height && p.height};
display: ${(p) => p.flex && "flex"};
flex-direction: ${(p) => p.column ? "column" : "row"};
justify-content: ${(p) => p.justify && p.justify};
align-items: ${(p) => p.align && p.align};
padding: ${(p) => p.padding && p.padding};
margin: ${(p) => p.margin && p.margin};
${(p) => p.extraStyles && p.extraStyles};

`;