import React from "react";
import CardTitle from "./CardTitle";
import Tabs from "components/Comman/Tabs";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const tabs = [
  { label: "Research", value: "research" },
  { label: "Lead Assists", value: "lead" },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8"];

const researchData = {
  labels,
  datasets: [
    {
      label: "Drafts Created",
      data: [10, 20, 40, 50, 35, 80, 44],
      backgroundColor: "#FF76AE",
    },
    {
      label: "Full Research Submitted",
      data: [10, 20, 40, 50, 35, 80, 0],
      backgroundColor: "#3996E3",
    },
  ],
};

const leadData = {
  labels,
  datasets: [
    {
      label: "Lead Assists",
      data: [10, 20, 40, 50, 35, 80, 44],
      backgroundColor: "#FF9C5D",
    },
  ],
};

function YourActivity() {
  const [selectedTab, setSelectedTab] = useState("research");
  return (
    <div className="w-full lg:w-3/5 space-y-6 bg-white rounded-2xl p-4">
      <CardTitle heading="Your Activity" />
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="">
        <Bar
          options={options}
          data={selectedTab == "research" ? researchData : leadData}
        />
      </div>
    </div>
  );
}

export default YourActivity;
