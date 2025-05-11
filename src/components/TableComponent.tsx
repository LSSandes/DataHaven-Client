import React from "react";

interface TableComponentProps {
  tableData: {
    Topic: string;
    Unit: string;
    country: {
      country_name: string;
      values: { [year: string]: number }[];
    }[];
  };
}

const TableComponent: React.FC<TableComponentProps> = ({ tableData }) => {
  if (!tableData || !tableData.country || tableData.country.length === 0) {
    return <div>No data available to display the table.</div>;
  }

  // Extract years from the first country's values
  const years = tableData.country[0].values.map(
    (value) => Object.keys(value)[0]
  );

  // Extract country names
  const countryNames = tableData.country.map((country) => country.country_name);

  return (
    <div className="overflow-x-auto max-w-[1000px]">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Year</th>
            {countryNames.map((countryName) => (
              <th
                key={countryName}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                {countryName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {years.map((year, yearIndex) => (
            <tr key={year}>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                {year}
              </td>
              {tableData.country.map((country) => {
                const yearValue = country.values[yearIndex]
                  ? Object.values(country.values[yearIndex])[0]
                  : null;
                return (
                  <td
                    key={country.country_name + year}
                    className="border border-gray-300 px-4 py-2 text-right"
                  >
                    {yearValue ? yearValue.toLocaleString() : "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
