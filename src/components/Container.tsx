import React from 'react'
import styled from 'styled-components'


interface ContainerProps {
width?:string,
height?:string,
flex?:boolean,
column?: boolean,
justify?:string, 
align?: string,
padding?: string,
margin?: string,
extraStyles?: string,
self?:string,
children?:  React.ReactNode ,
}

export const Container = styled.div<ContainerProps>`

width: ${(p) => p.width && p.width};
height: ${(p) => p.height && p.height};
display: ${(p) => p.flex && "flex"};
flex-direction: ${(p) => p.flex && p.column ? "column" : "row"};
justify-content: ${(p) => p.flex && p.justify && p.justify};
align-items: ${(p) => p.flex && p.align && p.align};
padding: ${(p) => p.padding && p.padding};
margin: ${(p) => p.margin && p.margin};
align-self: ${(p) => p.flex && p.self };
${(p) => p.extraStyles && p.extraStyles};

`;