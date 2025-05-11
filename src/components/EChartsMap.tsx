import React from "react";
import ReactECharts from "echarts-for-react";

interface EChartsMapProps {
  data: {
    Topic: string;
    Unit: string;
    country: {
      country_name: string;
      values: { [year: string]: string }[];
    }[];
  };
}

const EChartsMap: React.FC<EChartsMapProps> = ({ data }) => {
  // Preprocess data for the map
  const preprocessData = () => {
    const rows: { name: string; value: number }[] = [];
    data.country.forEach((country) => {
      const latestYear = country.values[country.values.length - 1]; // Use the latest year
      const year = Object.keys(latestYear)[0];
      rows.push({
        name: country.country_name,
        value: parseFloat(latestYear[year]),
      });
    });
    return rows;
  };

  const mapData = preprocessData();

  // ECharts option configuration
  const options = {
    title: {
      text: `${data.Topic} (${data.Unit})`,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}",
    },
    visualMap: {
      min: Math.min(...mapData.map((d) => d.value)),
      max: Math.max(...mapData.map((d) => d.value)),
      left: "left",
      top: "bottom",
      text: ["High", "Low"],
      calculable: true,
    },
    series: [
      {
        type: "map",
        map: "world", // Use the world map
        roam: true,
        data: mapData,
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: "500px", width: "100%" }} />;
};

export default EChartsMap;