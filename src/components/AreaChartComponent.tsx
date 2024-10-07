import React from "react";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const formatterByType = ({ dataType, data }) => {
  const formatByType = {
    weather: `${data}º`,
    wind: `${data}km/h`,
    precipitation: `${data}%`,
  };

  return formatByType[dataType];
};

const colorPicker = ({ pathProperty, dataKey }) => {
  const strokeByKey = {
    weather: "red",
    wind: "blue",
    precipitation: "yellowgreen",
  };

  const fillByKey = {
    weather: "coral",
    wind: "CornflowerBlue",
    precipitation: "green",
  };

  console.log(fillByKey[dataKey]);

  if (pathProperty == "stroke") return strokeByKey[dataKey];
  return fillByKey[dataKey];
};

export const AreaChartComponent = ({ width, height, data }) => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <AreaChart
        width={width}
        height={height}
        data={data}
        style={{ paddingRight: "1rem" }}
      >
        <CartesianGrid />
        <XAxis
          style={{ fontSize: "1.6rem" }}
          dataKey={Object.keys(data[0])[0]}
        />
        <YAxis
          style={{ fontSize: "1.5rem" }}
          tickFormatter={(label) =>
            formatterByType({
              dataType: Object.keys(data[0])[1],
              data: label,
            })
          }
        />
        <Area
          type="monotone"
          dataKey={Object.keys(data[0])[1]}
          stroke={colorPicker({
            pathProperty: "stroke",
            dataKey: Object.keys(data[0])[1],
          })}
          fill={colorPicker({
            pathProperty: "fill",
            dataKey: Object.keys(data[0])[1],
          })}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
