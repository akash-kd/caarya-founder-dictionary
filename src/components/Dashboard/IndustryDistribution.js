import React from "react";
import CardTitle from "./CardTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Industry 1",
    "Industry 2",
    "Industry 3",
    "Industry 4",
    "Industry 5",
    "Industry 6",
    "Industry 7",
    "Industry 8",
  ],
  datasets: [
    {
      label: "# of StartUps",
      data: [12, 19, 3, 5, 2, 33, 0, 33],
      backgroundColor: [
        "#F4C4F7",
        "#F282F5",
        "#903795",
        "#451451",
        "#F9E3FC",
        "#C44EB9",
        "#2A192D",
        "#2A192D",
      ],
      borderColor: [],
      borderWidth: 0,
    },
  ],
};

const options = {
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
function IndustryDistribution() {
  return (
    <div className="w-full lg:w-2/5 space-y-6 bg-white rounded-2xl p-4">
      <CardTitle heading="Industry Distribution" />

      <div className="">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default IndustryDistribution;
