import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import web from "../../../assets/svg/fi_2600295.svg";
import instagram from "../../../assets/svg/instagram.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import twitter from "../../../assets/svg/twitter.svg";
import employee from "../../../assets/svg/fi_10216679.svg";
import revenue from "../../../assets/svg/fi_10693560.svg";
import CardTitle from "../../../components/SusForm/CardTitle";
import RadioCard from "../../../components/SusForm/RadioCard";
import InsightsCard from "../../../components/SusForm/InsightsCard";

const DigitalFootprint = () => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={web} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Digital Footprint
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      <div className="flex flex-col flex-start px-6 pt-4 pb-20 gap-6">
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle img={linkedin} imgSize={8} title="LinkedIn Activity" />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="Remote Work"
              card2="Hybrid Work"
              card3="On-Site Work"
            />
            <InsightsCard
              placeholder=" eg., the founder's exact age"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks"
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            title="LinkedIn Followers"
            icon={
              <div className="flex p-1 flex-col items-center justify-center gap-2 rounded bg-[#1E79C3]">
                <MdPeopleAlt size="24px" color="white" />
              </div>
            }
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="0-5 Years Old"
              card2="6-10 Years Old"
              card3="10+ Years Old"
            />
            <InsightsCard
              placeholder=" eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
              ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle img={instagram} imgSize={8} title="Instagram Activity" />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="Bootstrapped / Pre-Seed"
              card2="Seed Funding"
              card3="Series A, B, C"
            />
            <InsightsCard
              placeholder="eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
              ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            title="Instagram Followers"
            icon={
              <div className="flex p-1 flex-col items-center justify-center gap-2 rounded bg-[#FB6F60]">
                <MdPeopleAlt size="24px" color="white" />
              </div>
            }
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="1-10 Employees"
              card2="11-30 Employees"
              card3="30+ Employees"
            />
            <InsightsCard
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some  help and guidance in building their startup"
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle img={twitter} imgSize={8} title="Twitter Activity" />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="₹ 0-5 Cr."
              card2="₹ 6-10 Cr."
              card3="+ ₹ 10 Cr."
            />
            <InsightsCard
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some  help and guidance in building their startup"
            />
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            title="Twitter Followers"
            icon={
              <div className="flex p-1 flex-col items-center justify-center gap-2 rounded bg-[#282724]">
                <MdPeopleAlt size="24px" color="white" />
              </div>
            }
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              card1="₹ 0-5 Cr."
              card2="₹ 6-10 Cr."
              card3="+ ₹ 10 Cr."
            />
            <InsightsCard
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some  help and guidance in building their startup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalFootprint;
