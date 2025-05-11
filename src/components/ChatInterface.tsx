import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import MessageInput from "./MessageInput";
import AnswerInterface from "./AnswerInterface";
import axios from "axios";
import { env } from "../config/env";

const ChatInterface: React.FC = () => {
  const dataSources = [
    { name: "World Bank", url: "data.worldbank.org" },
    { name: "OECD", url: "data.oecd.org" },
    { name: "WHO", url: "apps.who.int" },
    { name: "UN Data", url: "data.un.org" },
    { name: "Eurostat", url: "ec.europaa.eu/eurostat" },
    { name: "US Census Bureau", url: "api.census.gov" },
    { name: "Our World In Data", url: "ourworldindata.org" },
    { name: "World Meteorological Organization", url: "public.wmo.int" },
    { name: "International Monetary Fund", url: "imf.org" },
    { name: "OpenWeather", url: "openweather.co" },
  ];
  const [answer, setAnswer] = useState<{
    data?: {
      data?: {
        Topic: string;
        Unit: string;
        country: { country_name: string; values: { [year: string]: string }[] }[];
      }[];
      recommend_chart_type?: string;
      summary?: string;
    };
    error?: string;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const handleSearch = async (query: string) => {
    console.log("Searching for:", query);
    setQuery(query);
    setLoading(true);
    try {
      const response = await axios.post(`${env.BASE_URL}/data/generate`, {
        prompt: query,
      });
      console.log("-----------ok--------->", response.data.data);
      setAnswer(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full mx-auto bg-white">
      <div className="flex justify-center w-full bg-[#FBFBFB]">
        <div className="flex flex-col lg:w-1/2 w-[90%] items-start mb-8 justify-center mt-10">
          <h1
            className="text-5xl font-bold text-[#1E3648] mb-6"
            style={{ fontFamily: "Roboto-Bold" }}
          >
            Get data from across the world
          </h1>
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <MessageInput
              onSendMessage={handleSearch}
              isLoading={false}
              placeholder="Try asking about population growth, CO2 emissions, unemployment rate, and more"
            />

            <AnswerInterface data={answer} loading={loading} query={query} />
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white flex justify-center mb-12">
        <div className="flex flex-col lg:w-1/2 w-[90%] bg-white ">
          <h2
            className="text-3xl font-semibold text-[#1E3648] mb-6"
            style={{ fontFamily: "Roboto-Bold" }}
          >
            Data Sources
          </h2>
          <div
            className="flex flex-col justify-center"
            style={{ fontFamily: "Roboto-Regular" }}
          >
            {dataSources.map((source) => (
              <a
                key={source.name}
                href={`https://${source.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-b border-gray-200 hover:border-blue-500 transition-colors"
              >
                <span className="text-gray-900">{source.name}</span>
                <div className="flex items-center text-gray-500">
                  <span className="mr-2 text-sm">{source.url}</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
