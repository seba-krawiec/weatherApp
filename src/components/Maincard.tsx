import  React from 'react'
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
  sunny } from "../assets/images/all";
import { Container } from './Container.tsx';



export const Maincard = () => {

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
    <MainCard
    flex 
    column
    justify="space-between"
    align="center"
    >
      <MainFigure>
        <div>

        <img src={handleImage("rainy_storm")} alt="weather today"/>
        </div>
        <figcaption>
          <span>23ºC</span>
          <span>min:16ºC max:25ºC</span>
          <span>precipitaciones: 90%</span>
          <span>humedad: 10%</span>

        </figcaption>
      </MainFigure>
        
    </MainCard>
  )
}


const MainCard = styled(Container)`

background-color:${(p) => p.theme.colors.orange300};
 width:30%;
 border-radius: ${(p) => p.theme.borderRadius.common};
 padding: 3rem 2.5rem;
 box-shadow: ${(p) => (p.theme.shadows.black,p.theme.shadows.colorized(p.theme.colors.orange300))};

`;

const MainFigure = styled.figure`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: white;

  div {
    width: 33rem;;
  }

  img{
    width: 100%;
  }

  figcaption{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span:first-child {
     font-size : 10rem;
     font-weight: 600;
     margin-bottom: ${(p) => p.theme.margins.large};
    }
    span {
      font-size : 2.6rem;
     font-weight: 400;
     margin-bottom: ${(p) => p.theme.margins.small};
    }


  }
`;