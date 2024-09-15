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
  sunny,
  cloud,
  snowy,
  mist,
} from "../assets/images/all.js";


interface cardProps {
  dia?: string, 
mainTemp?: string,
minTemp?: string,
maxTemp?: string,
weather?: string
}


export const Card = ({dia, mainTemp, minTemp, maxTemp, weather }: cardProps) => {


  const handleImage = (weather) => {

    const imageByWeather = {
      "01d":sunny,
      "02d":day_cloudy,
      "03d":cloud,
      "04d":cloudy,
      "9d":rainy,
      "10d":day_rainy,
      "11d":storm,
      "13d":snowy,
      "50d": mist,

      // night
      "01n":moon,
      "02n":night_cloudy,
      "03n":cloud,
      "04n":cloudy,
      "9n":rainy,
      "10n":night_rainy,
      "11n":storm,
      "13n":snowy,
      "50n": mist,

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

        <img src={handleImage("13n")} alt="weather" />
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