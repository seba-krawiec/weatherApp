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
        <SearchContainer flex>
                <span>Buenos Aires</span>
                <Location/>
                <div></div>
                <input type="text" />
                <Search/>
        </SearchContainer>
        <UnitContainer flex>
            <h2>C</h2>
            <h2>F</h2>

        </UnitContainer>


    </NavBar>
  )
}


const NavBar = styled(Container)`
    gap: 1.5rem;
`;

const SearchContainer = styled(Container)`
position: relative;
gap: 1.5rem;
svg {
        transform:scale(1.2)
    }

    div{
        background-color: white;
        width: .4rem;
        height: 2.5rem;
        border-radius:1rem
    }

color: white;
    background-color:${p => p.theme.colors.orange300};
    padding: ${p => `${p.theme.paddings.medium}`};
    border-radius: 1rem;
    box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange300))};
    height: 5rem;
    font-size: 2rem;

    input{
        background-color: transparent;
        border: none;
        color: whitesmoke;
        padding: 0rem .5rem .5rem .5rem;
        border-bottom: solid .3rem whitesmoke;
        outline: none;
        opacity: 0;
        pointer-events: none;
        width: 0;
        position: absolute;
    }

    &:hover input{
        opacity: 1;
        pointer-events: all;
        width: 10rem;
        position: initial;
        transition: all 1.5s;
    }
`;

const UnitContainer = styled(Container)`

gap: 1rem;

   h2{
    display: inline-block;
    background-color:${p => p.theme.colors.orange300};
    padding: ${p => `${p.theme.paddings.medium}`};
    border-radius: 1rem;
    box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange300))};
    height: 5rem;
    font-size: 2rem;
    color: whitesmoke;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        transform: scale(1.1) translateY(-.5rem);
    }

    &:active{
        transform: scale(1) translateY(-.1rem);
    }
        }



`;