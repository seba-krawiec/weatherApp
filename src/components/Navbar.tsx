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
        <Wrapper flex justify='space-between' align='center'>

                <span>Buenos Aires</span>
                <Location/>
                <Separator/>
        <SearchContainer flex align='center'>
                <button type="submit">
                <Search/>
                </button>
                <input placeholder='search location' type="text" />
        </SearchContainer>
        </Wrapper>
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

const Wrapper = styled(Container)`
    gap: 1rem;
    box-shadow: ${(p) => (p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange300))};
    background-color:${p => p.theme.colors.orange300};
    border-radius: 1.5rem;
    padding: ${p => `${p.theme.paddings.medium}`};
    color: white;
    font-size: 2rem;

`;

const Separator = styled.div`
    background-color: white;
    width: .4rem;
    height: 2.5rem;
    border-radius:1rem;
`;

const SearchContainer = styled(Container)`
position: relative;
overflow-x: hidden;
transition: width ease-in-out 300ms;
width: 2.5rem;

button{
    background-color: transparent;
    border: none;
    outline: none;
    height: 2.5rem;
    width: 2.5rem;
    margin-left: auto;

    svg{
        transform: scale(1.1);
        cursor: pointer;
    }
}


input{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-grow: 1;
    padding: 0 .8rem .5rem 0;
    background-color: transparent;
    border: none;
    opacity: 0;
    color: white;
    font-size: 2rem;
    cursor: pointer;

    &:focus{
        outline: 0;
    }
}

&:focus-within{
    width: 20rem;
    & input{
        opacity: 1;
        border-bottom: solid white .2rem;
        cursor: initial;
        width: calc(100% - 2.5rem);
    }
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