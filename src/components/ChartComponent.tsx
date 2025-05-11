import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  chartData: {
    Topic: string;
    Unit: string;
    country: {
      country_name: string;
      values: { [year: string]: string }[];
    }[];
  };
}

// Function to generate random bright colors
const predefinedColors = ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 159, 64)"];
let colorIndex = 0;

const getBrightColor = () => {
  const color = predefinedColors[colorIndex % predefinedColors.length]; // Cycle through predefined colors
  colorIndex++;
  return color;
};

const ChartComponent: React.FC<ChartComponentProps> = ({ chartData }) => {
  // Ensure chartData is properly passed and not empty
  console.log("dddddddd------------>", chartData.country);
  if (
    !chartData ||
    !chartData.country ||
    chartData.country.length === 0
  ) {
    return <div>No data available to display the chart.</div>;
  }

  // Ensure the first country has values
  if (
    !chartData.country[0]?.values ||
    chartData.country[0].values.length === 0
  ) {
    return <div>No data available for the selected country.</div>;
  }

  // Extract years (labels) from the first country's values
  const labels = chartData.country[0].values.map(
    (value) => Object.keys(value)[0]
  );

  // Generate datasets for each country
  const datasets = chartData.country.map((country) => {
    const dataValues = country.values.map((value) =>
      value[Object.keys(value)[0]]
        ? parseFloat(value[Object.keys(value)[0]])
        : null
    ); // Extract values, handling empty strings as `null`

    return {
      label: country.country_name,
      data: dataValues,
      borderColor: getBrightColor(), // Randomized line color
      backgroundColor: getBrightColor(), // Randomized fill color
      fill: false, // Disable fill under the line
    };
  });

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${chartData.Topic} (${chartData.Unit || "No Unit"})`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: chartData.Unit || "Value",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
