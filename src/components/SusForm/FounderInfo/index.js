import React from "react";

import { BsCheckCircle, BsFlagFill } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import { MdInsights } from "react-icons/md";
import founder from "../../../assets/svg/fi_8677126.svg";
import cake from "../../../assets/svg/Cake.svg";
import idea from "../../../assets/svg/Idea.svg";
import brownie from "../../../assets/svg/Brownie.svg";
import history from "../../../assets/svg/fi_11244276.svg";
import RadioCard from "components/SusForm/RadioCard";
import InsightsCard from "components/SusForm/InsightsCard";

const FounderInfo = () => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={founder} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Founder Info
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      {/* Add Co-Founder */}
      <div></div>

      <div className="flex flex-col flex-start px-6 pt-4 pb-20 gap-6">
        <div className="flex flex-col flex-start p-4 gap-3">
          <h1 className="font-inter text-lg font-semibold text-neutral-800">
            Founder Name
          </h1>
          <input
            placeholder="Add Email Address"
            className="flex px-4 py-3 items-center w-[483px] rounded-lg border border-neutral-300"
          />
        </div>

        <div className="flex flex-col flex-start p-4 gap-3">
          <h1 className="font-inter text-lg font-semibold text-neutral-800">
            Founder Email
          </h1>
          <input
            placeholder="Add Email Address"
            className="flex px-4 py-3 items-center w-[483px] rounded-lg border border-neutral-300"
          />
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <div className="flex items-center p-1">
              <img src={cake} alt="" className="w-6 h-6" />
            </div>
            <h1 className="font-inter text-lg font-semibold text-neutral-800">
              Founder's Age
            </h1>
          </div>

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="Age is less than 25 Years"
              card2="Age is between 25-32 Years"
              card3="Age is More than 32 Years"
            />

            <InsightsCard
              placeholder="eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks."
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <div className="flex items-center p-1">
              <img src={history} alt="" className="w-6 h-6" />
            </div>
            <h1 className="font-inter text-lg font-semibold text-neutral-800">
              Founding History
            </h1>
          </div>

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="0-1 Startups Founded"
              card2="2-4 Startups Founded"
              card3="4+ Startups Founded"
            />

            <InsightsCard
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some help and guidance in building their startup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderInfo;
