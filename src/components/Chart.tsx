import { Box, Stack } from "@mui/material";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import useDemoConfig from "../services/demoConfig";
export const AreaChart = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 2,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        // OR
        // elementType: "area",
      },
    ],
    []
  );
  return (
    <Stack width={"100%"} height={400}>
      <Chart
        color="white"
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </Stack>
  );
};
