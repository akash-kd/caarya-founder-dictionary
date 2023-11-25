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
import { useEffect } from "react";
import moment from "moment";

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

function YourActivity({ research }) {
  const [selectedTab, setSelectedTab] = useState("research");

  const [researchData, setResearchData] = useState({
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
  });
  useEffect(() => {
    let minDate = moment().add(-7, "days");
    let maxDate = moment();
    let array = [];

    while (minDate.isSameOrBefore(maxDate)) {
      array.push(minDate.format("YYYY-MM-DD"));
      minDate.add(1, "days");
    }
    let dataDraft = [];
    array.map((i) => {
      dataDraft?.push(
        research?.draftsCount?.find(
          (a) =>
            moment(a?.date).format("YYYY-MM-DD") ==
            moment(i).format("YYYY-MM-DD")
        )?.draftsCount || 0
      );
    });
    let dataCompleted = [];
    array.map((i) => {
      dataCompleted?.push(
        research?.completedCount?.find(
          (a) =>
            moment(a?.date).format("YYYY-MM-DD") ==
            moment(i).format("YYYY-MM-DD")
        )?.completedCount || 0
      );
    });

    setResearchData({
      labels: array?.map((a) => moment(a).format("DD")),
      datasets: [
        {
          label: "Drafts Created",
          data: dataDraft,
          backgroundColor: "#FF76AE",
        },
        {
          label: "Full Research Submitted",
          data: dataCompleted,
          backgroundColor: "#3996E3",
        },
      ],
    });
  }, [research]);
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
