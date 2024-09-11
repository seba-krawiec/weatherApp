import React from 'react'
import { Container } from './Container.tsx'
import styled from 'styled-components';
import {     cloudy,
  day_cloudy,
  day_rainy,
  moon,
  night_cloudy,
  night_rainy,
  rainy_storm,
  rainy,
  storm,
  sunny} from "../assets/images/all.js";


interface cardProps {
  dia: string, 
  mainTemp: string,
  minTemp: string,
  maxTemp: string,
  weather: string
}


export const Card = ({dia, mainTemp, minTemp, maxTemp, weather }) => {


  const handleImage = (weather) => {

    const imageByWeather = {
      sunny,
      cloudy,
      rainy,
      rainy_storm,
      day_cloudy,
      day_rainy,
      moon,
      night_cloudy,
      night_rainy,
      storm,
    }

    return imageByWeather[weather];

  }


  return (
    <CardContainer
    flex
    column
    height='100%'
    >
      <figure>

        <h2>Miercoles</h2>
        <Wrapper flex  align='center' justify='space-between'>
        <div>

        <img src={handleImage("night_cloudy")} alt="weather" />
        </div>
        <span>20ºC</span>

        </Wrapper>
        <figcaption>

        <span>min: 18ºC</span>
        <span>max: 25ºC</span>
        </figcaption>
      </figure>
    </CardContainer>
  )
}


const CardContainer = styled(Container)`

background-color:aliceblue;
padding: 1rem 1.4rem;
width: 13rem;
border-radius: 1.5rem;
cursor: pointer;

&:hover{
  transform: scale(1.1) translateY(-.5rem);
 }

 &:active{
        transform: scale(1) translateY(-.1rem);
    }

 transition: all .2s;


figure{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

figcaption{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.5rem;
  width: 100%;
}

`;

const Wrapper = styled(Container)`

width: 100%;
span{
  font-size: 2rem;
}

img{
  width: 100%;
}


div{
  width: 4.9rem;
}

`;