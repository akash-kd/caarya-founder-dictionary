import React from "react";
import CardTitle from "./CardTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

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
function IndustryDistribution({ industries }) {
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    if (industries?.length > 0) {
      let labels = industries?.map((i) => i?.type);
      let values = industries?.map((i) => i?.startUpCount);
      setData({
        labels: labels,
        datasets: [
          {
            label: "# of StartUps",
            data: values,
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
      });
    }
  }, [industries]);

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
