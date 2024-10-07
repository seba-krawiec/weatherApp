import React, { useState } from "react";
import {
  Card,
  Container,
  Maincard,
  Navbar,
  AreaChartComponent,
} from "../components";
import styled, { useTheme } from "styled-components";
import { icons } from "../assets/icons";

const { Humidity, FeelsLike, Precipitations, Sunrise, Sunset, Wind } = icons;

// interface MainProps {
//   onChange?: () => void;
//   children?: React.ReactNode;
// }

// interface ExtraData {
//   label?: string;
//   icon?: React.ReactNode;
//   data?: string;
// }

const extraData = [
  {
    label: "sensacion termica",
    icon: <FeelsLike />,
    data: "25º",
  },
  {
    label: "humedad",
    icon: <Humidity />,
    data: "90%",
  },
  {
    label: "precipitaciones",
    icon: <Precipitations />,
    data: "10%",
  },
  {
    label: "velocidad del viento",
    icon: <Wind />,
    data: "20km/h",
  },
  {
    label: "salida del sol",
    icon: <Sunrise />,
    data: "10:00 am",
  },
  {
    label: "puesta del sol",
    icon: <Sunset />,
    data: "08:00 pm",
  },
];

const data1 = [
  {
    weatherTime: "00:00",
    weather: 22,
  },
  {
    weatherTime: "03:00",
    weather: 9,
  },
  {
    weatherTime: "06:00",
    weather: 20,
  },
  {
    weatherTime: "09:00",
    weather: 10,
  },
  {
    weatherTime: "12:00",
    weather: 15,
  },
  {
    weatherTime: "15:00",
    weather: 28,
  },
  {
    weatherTime: "18:00",
    weather: 22,
  },
  {
    weatherTime: "21:00",
    weather: 12,
  },
  {
    weatherTime: "24:00",
    weather: 5,
  },
];
const data2 = [
  {
    weatherTime: "00:00",
    wind: 22,
  },
  {
    weatherTime: "03:00",
    wind: 9,
  },
  {
    weatherTime: "06:00",
    wind: 20,
  },
  {
    weatherTime: "09:00",
    wind: 10,
  },
  {
    weatherTime: "12:00",
    wind: 15,
  },
  {
    weatherTime: "15:00",
    wind: 28,
  },
  {
    weatherTime: "18:00",
    wind: 22,
  },
  {
    weatherTime: "21:00",
    wind: 12,
  },
  {
    weatherTime: "24:00",
    wind: 5,
  },
];

const data3 = [
  {
    weatherTime: "00:00",
    precipitation: 22,
  },
  {
    weatherTime: "03:00",
    precipitation: 9,
  },
  {
    weatherTime: "06:00",
    precipitation: 20,
  },
  {
    weatherTime: "09:00",
    precipitation: 10,
  },
  {
    weatherTime: "12:00",
    precipitation: 15,
  },
  {
    weatherTime: "15:00",
    precipitation: 28,
  },
  {
    weatherTime: "18:00",
    precipitation: 22,
  },
  {
    weatherTime: "21:00",
    precipitation: 12,
  },
  {
    weatherTime: "24:00",
    precipitation: 5,
  },
];

export const Main = ({ onChange }) => {
  const theme = useTheme();
  const [weatherData, setWeatherData] = useState(data1);

  const handleClick = () => {
    console.log("parkour");
  };

  const handleGraphicView = (dataType) => {

    const dataByType = {
      weather: data1,
      wind: data2,
      precipitations: data3
    }

    setWeatherData(dataByType[dataType])
  }

  return (
    <Container
      flex
      column
      width={"100%"}
      height={"100vh"}
      justify={"space-between"}
      style={{
        gap: theme.gaps.cardStreets,
        padding: `${theme.paddings.large} 0`,
        scrollSnapAlign: "start",
      }}
    >
      <UpRow flex justify={"space-between"}>
        <Maincard />

        <RightWrapper flex column justify={"space-between"} align={"center"}>
          <Navbar />
          <Container
            flex
            width="100%"
            height="55%"
            style={{ position: "relative" }}
          >
            <Container
              flex
              height="5rem"
              style={{
                position: "absolute",
                left: "5rem",
                top: "-5rem",
                gap: "1rem",
              }}
            >
              <button onClick={() =>handleGraphicView("weather")}>weather</button>
              <button onClick={() =>handleGraphicView("wind")}>wind</button>
              <button onClick={() =>handleGraphicView("precipitations")}>precipitations</button>
            </Container>
            <AreaChartComponent width="100%" height="100%" data={weatherData} />
          </Container>
          <Container
            flex
            width="100%"
            align="center"
            height="16rem"
            justify="space-between"
          >
            {extraData.map(({ label, icon, data }, index) => {
              return (
                <ExtraDataCard
                  key={index}
                  flex
                  column
                  align="center"
                  justify="space-between"
                >
                  <h2>{label?.toUpperCase()}</h2>
                  <Wrapper>
                    <div>{icon}</div>
                    <span>{data}</span>
                  </Wrapper>
                </ExtraDataCard>
              );
            })}
          </Container>
        </RightWrapper>
      </UpRow>

      <BottomRow flex justify={"space-between"} align={"center"}>
        <Container flex column justify="space-between" align="center">
          <h2>tiempo extendido 7 dias</h2>
          <button onClick={handleClick}>volver a hoy</button>
        </Container>
        <Container
          flex
          justify="space-between"
          align="center"
          height="100%"
          width="70%"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </BottomRow>
    </Container>
  );
};

const UpRow = styled(Container)`
  height: 100%;
  gap: ${(p) => p.theme.gaps.cardStreets};
`;

const BottomRow = styled(Container)`
  background-color: ${(p) => p.theme.colors.orange500};
  height: 35%;
  box-shadow: ${(p) => (
    p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange500)
  )};
  border-radius: 1.5rem;
  padding: 2.4rem 10rem;
`;

const RightWrapper = styled(Container)`
  width: 100%;
  gap: ${(p) => p.theme.gaps.cardStreets};
`;

const ExtraDataCard = styled(Container)`
  background-color: ${(p) => p.theme.colors.orange200};
  padding: 2rem;
  border-radius: 1.5rem;
  flex-wrap: wrap;
  width: 20rem;
  height: 100%;
  box-shadow: ${(p) => (
    p.theme.shadows.black, p.theme.shadows.colorized(p.theme.colors.orange200)
  )};

  h2 {
    display: inline-block;
    min-width: 50%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 3rem;
    height: 3rem;
  }

  span {
    line-break: auto;
    font-size: 1.5rem;
  }
`;
