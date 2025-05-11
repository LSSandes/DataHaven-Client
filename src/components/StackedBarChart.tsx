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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StackedBarChartProps {
  chartData: {
    Topic: string;
    country: {
      country_name: string;
      values: { [year: string]: string }[];
    }[];
  };
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ chartData }) => {
  // Extract years and countries
  const years = Array.from(
    new Set(
      chartData.country.flatMap((country) =>
        country.values.map((value) => Object.keys(value)[0])
      )
    )
  );

  const countries = chartData.country.map((c) => c.country_name);

  // Prepare datasets for each year
  const datasets = years.map((year) => ({
    label: year,
    data: countries.map((countryName) => {
      const country = chartData.country.find(
        (c) => c.country_name === countryName
      );
      const yearData = country?.values.find((v) => v[year]);
      return yearData ? parseFloat(yearData[year]) : 0;
    }),
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.6)`, // Random color
    borderWidth: 1,
  }));

  // Chart.js data
  const data = {
    labels: countries, // X-axis labels (countries)
    datasets: datasets, // Data for each year
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: chartData.Topic, // Chart title
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking on the X-axis
      },
      y: {
        stacked: true, // Enable stacking on the Y-axis
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;