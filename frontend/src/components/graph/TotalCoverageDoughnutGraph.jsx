import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

export default function TotalCoverageDoughnutGraph({ data, title }) {
  const dataDoughnutGraph = {
    datasets: [
      {
        data,
        backgroundColor: [
          colors.blue[500],
          colors.red[500],
          colors.orange[500],
          colors.purple[500],
        ],
      },
    ],
  };
  return (
    <Box>
      <Typography
        variant="h6"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>
          {data[0]
            ? `${
                Math.round(
                  (data[0] / data.reduce((pValue, cValue) => pValue + cValue)) *
                    10000
                ) / 100
              }%`
            : ""}
        </span>
        <span>{title}</span>
      </Typography>
      <Doughnut height="200" width="200" data={dataDoughnutGraph} />
    </Box>
  );
}
