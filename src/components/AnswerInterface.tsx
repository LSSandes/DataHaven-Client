import { useEffect, useState, CSSProperties, useRef } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { BeatLoader } from "react-spinners";
import { BsRobot } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import ChartComponent from "./ChartComponent";
import TableComponent from "./TableComponent";
import HorizontalBarChartComponent from "./HorizentalbarChartComponent";
import ChoroplethMap from "./ChoroplethMap";
import StackedBarChart from "./StackedBarChart";
// import EChartsMap from "./EChartsMap";
import "react-loading-skeleton/dist/skeleton.css";

interface AnswerInterfaceProps {
  data?: {
    data?: {
      data?: {
        Topic: string;
        Unit: string;
        country: {
          country_name: string;
          values: { [year: string]: string }[];
        }[];
      }[];
      recommend_chart_type?: string;
      summary?: string;
    };
    error?: string;
  };
  loading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const AnswerInterface: React.FC<AnswerInterfaceProps & { query: string }> = ({
  query,
  data,
  loading,
}) => {
  console.log("answer------------->", JSON.stringify(data, null, 2));
  const [results, setResults] = useState<
    { query: string; summary: string; chartData: any[] }[]
  >([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data?.data) {
      const newResult = {
        query,
        summary: data.data.summary || "",
        chartData: data.data.data || [], // Handle multiple topics
      };
      setResults((prev) => [...prev, newResult]); // Append new result to the list
    }
  }, [data]);

  useEffect(() => {
    if (loading && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      window.scrollBy(0, -1000);
    }
  }, [loading, results]);

  return (
    <div className="flex flex-col w-full justify-start items-center gap-5">
      {results.length > 0 && (
        <div className="flex w-full justify-start items-center gap-2 border-b border-gray-300">
          <RiQuestionAnswerLine className="w-5 h-5" />
          <span>Answer</span>
        </div>
      )}
      <div className="w-full flex flex-col justify-start items-start max-h-[1000px] overflow-y-auto">
        {/* Display all saved results */}

        {results.map((result, index) => (
          <div
            key={index}
            className="flex flex-col w-full justify-start items-start gap-5 border-b border-gray-300 pb-5 px-2 mt-5"
          >
            {/* Display query */}
            <div className="w-full mb-2">
              <span className="text-gray-600 font-bold text-lg">
                {result.query}
              </span>
            </div>

            {/* Display summary */}
            {result.summary && (
              <div className="w-full mb-4">
                <span className="text-gl">{result.summary}</span>
              </div>
            )}

            {/* Display chart data for each topic */}
            {result.chartData &&
              Array.isArray(result.chartData) &&
              result?.chartData?.map((topicData, topicIndex) => (
                <div
                  key={topicIndex}
                  className="flex flex-col w-full justify-center items-center gap-5 border-t border-gray-200 pt-5"
                >
                  {/* Topic Title */}
                  <div className="w-full text-gray-700 font-bold text-lg">
                    {topicData.Topic}
                  </div>

                  {/* Render charts for the topic */}
                  <TableComponent tableData={topicData} />
                  <ChartComponent chartData={topicData} />
                  <HorizontalBarChartComponent chartData={topicData} />
                  <StackedBarChart chartData={topicData} />
                  <ChoroplethMap data={topicData} />
                  {/* <EChartsMap data={topicData} /> */}
                </div>
              ))}
          </div>
        ))}

        {/* Loading and skeleton for new data */}

        {loading && (
          <div className="w-full flex justify-start items-center gap-2 mt-4">
            <div className="flex justify-center items-center gap-2">
              <BsRobot className="w-6 h-6 text-blue-500" />
              <span className="text-gray-400">DataHaven Working</span>
            </div>
            <div className="flex justify-center items-center">
              <BeatLoader
                color="#3B82F6"
                loading={loading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
        )}
        {loading && (
          <div className="w-full mt-2">
            <Skeleton count={4} width={"100%"} />
            <Skeleton width={"60%"} style={{ width: "60%" }} />
            <div className="w-full h-[500px]"></div>
          </div>
        )}
        <div ref={bottomRef}></div>

        {/* Display error if any */}
        {data?.error && (
          <div className="w-full h-[fit-content] bg-red-500 text-white place-content-center p-2">
            {data.error || "An error occurred"}
          </div>
        )}
        {/* Scroll to bottom reference */}
      </div>
    </div>
  );
};

export default AnswerInterface;
