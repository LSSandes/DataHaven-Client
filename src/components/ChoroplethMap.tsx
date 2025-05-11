import React, { useState } from "react";
import Plot from "react-plotly.js";
import countries from "world-countries"; // Import world-countries dataset

interface ChoroplethMapProps {
  data: {
    Topic: string;
    Unit: string;
    country: {
      country_name: string;
      values: { [year: string]: string }[];
    }[];
  };
}

const ChoroplethMap: React.FC<ChoroplethMapProps> = ({ data }) => {
  const allYears = Array.from(
    new Set(
      data.country.flatMap((country) =>
        country.values.map((value) => Object.keys(value)[0])
      )
    )
  );
  const [selectedYear, setSelectedYear] = useState<string>(allYears[0]); // Default year

  console.log("All Years:", allYears);
  // Map country names to ISO Alpha-3 codes dynamically
  const countryCodes: { [key: string]: string } = countries.reduce(
    (acc, country) => {
      acc[country.name.common] = country.cca3; // Map country name to ISO Alpha-3 code
      return acc;
    },
    {} as { [key: string]: string }
  );

  // Process data for the selected year
  const processedData = data.country.map((country) => {
    const yearData = country.values.find((v) => v[selectedYear]);
    return {
      country_name: country.country_name,
      value: yearData ? parseFloat(yearData[selectedYear]) : null,
    };
  });

  // Filter out countries with no data for the selected year
  const filteredData = processedData.filter((d) => d.value !== null);

  const locations = filteredData.map((d) => countryCodes[d.country_name]);
  const values = filteredData.map((d) => d.value);
  return (
    <div>
      {/* Dropdown to select year */}
      <div className="mb-4">
        <label htmlFor="year-select" className="mr-2 font-bold">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-dashed border-gray-500 focus:border-blue-500 focus:ring-0 px-2 py-1 rounded-md "
        >
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Plotly Choropleth Map */}
      <Plot
        data={[
          {
            type: "choropleth",
            locations: locations, // ISO Alpha-3 country codes
            z: values, // Values for the selected year
            text: filteredData.map((d) => d.country_name), // Country names
            colorscale: "Rainbow", // Color scale
            colorbar: {
              title: {
                text: `${data.Topic} (${data.Unit || "Value"})`,
                side: "right",
                font: { size: 12 },
              },
              thickness: 10,
            },
          },
        ]}
        layout={{
          title: { text: `Choropleth Map (${selectedYear})` },
          geo: {
            projection: {
              type: "scattermap", // Map projection type
            },
            showcoastlines: true, // Show coastlines
            coastlinecolor: "gray", // Set coastline color
            showland: true, // Highlight land areas
            landcolor: "#F2EFE9", // Set land color
            showocean: true, // Highlight ocean areas
            oceancolor: "#AAD3DF", // Set ocean color
            showlakes: true, // Highlight lakes
            lakecolor: "#a4c8f0", // Set lake color
            showcountries: true, // Show country borders
            countrycolor: "#D2C2CD", // Set country border color
            countrywidth: 1, // Set country border width
          },
          autosize: true, // Enable responsive resizing
          width: 700, // Let Plotly handle the width dynamically
          height: 500, // Let Plotly handle the height dynamically
        }}
        useResizeHandler={true} // Enable resize handler for responsiveness
        style={{ width: "100%", height: "100%" }} // Ensure t
      />
    </div>
  );
};

export default ChoroplethMap;
