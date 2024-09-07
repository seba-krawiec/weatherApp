import React from 'react'
import { Container } from './Container.tsx'
import styled from 'styled-components';
import {icons} from "../assets/icons";

export const Navbar = () => {

    const {Location, Search} = icons;

  return (
    <NavBar 
    flex
    self="flex-end" 
    align="center"
    justify="space-between"
    >
        
        <Location/>
        <div></div>
        <Search/>


    </NavBar>
  )
}


const NavBar = styled(Container)`

    color: white;
    background-color:${p => p.theme.colors.orange300};
    width: fit-content;
    padding: ${p => `${p.theme.paddings.medium}`};
    border-radius: 1rem;
    min-width:10rem;
    box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange300))};

    svg {
        transform:scale(1.2)
    }

    div{
        background-color: white;
        width: .4rem;
        height: 2.5rem;
        border-radius:1rem
    }

`;