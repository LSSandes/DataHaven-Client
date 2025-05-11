import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartComponentProps {
  chartData: {
    Topic: string;
    Unit: string;
    country: {
      country_name: string;
      values: { [year: string]: string }[];
    }[];
  };
}

// Function to generate predefined colors in a series
const predefinedColors = ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 159, 64)", "rgb(153, 102, 255)"];
let colorIndex = 0;

const getBrightColor = () => {
  const color = predefinedColors[colorIndex % predefinedColors.length]; // Cycle through predefined colors
  colorIndex++;
  return color;
};

const HorizontalBarChartComponent: React.FC<HorizontalBarChartComponentProps> = ({ chartData }) => {
  if (!chartData || !chartData.country || chartData.country.length === 0) {
    return <div>No data available to display the chart.</div>;
  }
  console.log("chartdata--------->", chartData);
  // Extract years (labels) from the first country's values
  const labels = chartData.country[0].values.map((value) =>
    Object.keys(value)[0]
  );

  // Generate datasets for each country
  const datasets = chartData.country.map((country) => {
    const dataValues = country.values.map((value) =>
      value[Object.keys(value)[0]] ? parseFloat(value[Object.keys(value)[0]]) : null
    ); // Extract values, handling empty strings as `null`

    return {
      label: country.country_name,
      data: dataValues,
      backgroundColor: getBrightColor(), // Randomized bar color
    };
  });

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    indexAxis: "y" as const, // Set the chart to horizontal
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
          text: chartData.Unit || "Value",
        },
      },
      y: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChartComponent;