import  React from 'react'
import styled from 'styled-components';
import {
  cloudy,
  day_cloudy,
  day_rainy,
  moon,
  night_cloudy,
  night_rainy,
  rainy,
  storm,
  sunny,
  cloud,
  snowy,
  mist
} from "../assets/images/all";
import { Container } from './Container.tsx';


export const Maincard = () => {

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
    <MainCard
    flex 
    column
    justify="space-between"
    align="center"
    >
      <MainFigure>
        <div>

        <img src={handleImage("11n")} alt="weather today"/>
        </div>
        <figcaption>
          <span>23ºC</span>
          <span>minima:16ºC</span>
          <span>maxima:25ºC</span>
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
     font-weight: 800;
     margin-bottom: ${(p) => p.theme.margins.large};
    }
    span {
      font-size : 3rem;
     font-weight: 400;
     margin-bottom: ${(p) => p.theme.margins.small};
    }


  }
`;