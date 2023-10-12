import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const founder = "assets/svg/pages/founderInfo/fi_8677126.svg";
const cake = "assets/svg/pages/founderInfo/Cake.svg";
const history = "assets/svg/pages/founderInfo/fi_11244276.svg";
const history1 = "assets/svg/pages/founderInfo/1.svg";

import RadioCard from "components/SusForm/Common/SusCheckRadioCard";
import InsightsCard from "components/SusForm/Common/InsightsCard";
import CardTitle from "../Common/CardTitle";
import ReferencesCard from "../Common/ReferencesCard";

const FounderInfo = ({ founderData, setFounderData, doSusCheck }) => {
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
      <div className="flex px-6 flex-end items-center gap-2 cursor-pointer">
        <RiAddFill color="#CE5511" size="24px"/>
        <h1 className="font-inter text-base font-semibold text-dawn-primary-700 underline underline-offset-2">
          Add Co-Founder
        </h1>
      </div>

      <div className="flex flex-col flex-start px-6 pt-4 pb-20 gap-6">
        <div className="flex flex-col flex-start p-4 gap-3">
          <h1 className="font-inter text-lg font-semibold text-neutral-800">
            Founder Name
          </h1>
          <input
            value={founderData?.name}
            onChange={(e) => {
              setFounderData({ ...founderData, name: e.target.value });
            }}
            placeholder="Add Name"
            className="flex px-4 py-3 items-center max-w:[483px] rounded-lg border border-neutral-300"
          />
        </div>

        <div className="flex flex-col flex-start p-4 gap-3">
          <h1 className="font-inter text-lg font-semibold text-neutral-800">
            Founder Email
          </h1>
          <input
            value={founderData?.email}
            onChange={(e) => {
              setFounderData({ ...founderData, email: e.target.value });
            }}
            placeholder="Add Email Address"
            className="flex px-4 py-3 items-center max-w:[483px] rounded-lg border border-neutral-300"
          />
        </div>

        <ReferencesCard>
          <CardTitle
            img={cake}
            title="Founder's Age"
            color="bg-fusion-primary-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "Age is less than 25 Years",
                  value: "Less than 25",
                  flag: "green",
                },
                {
                  label: "Age is between 25-32 Years",
                  value: "Between 25-32",
                  flag: "white",
                },
                {
                  label: "Age is More than 32 Years",
                  value: "More than 32",
                  flag: "red",
                },
              ]}
              data={founderData}
              field="age"
              onCheck={(val) => {
                doSusCheck("founder", "age", val);
              }}
            />

            <InsightsCard
              data={founderData}
              field="age"
              setData={(val) => {
                setFounderData(val);
              }}
              placeholder="eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks."
            />
          </div>
        </ReferencesCard>

        <ReferencesCard>
          <CardTitle
            img={history1}
            title="Work History"
            color="bg-fusion-secondary-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "Has less than 2 years of work ex.",
                  value: "0-1",
                  flag: "green",
                },
                {
                  label: "Has 2-6 years of work ex.",
                  value: "2-6",
                  flag: "white",
                },
                {
                  label: "Has more than 6 years of work ex.",
                  value: "6+",
                  flag: "red",
                },
              ]}
              data={founderData}
              field="workHistory"
              onCheck={(val) => {
                doSusCheck("founder", "workHistory", val);
              }}
            />

            <InsightsCard
              data={founderData}
              field="workHistory"
              setData={(val) => {
                setFounderData(val);
              }}
              placeholder=" eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
              ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
            />
          </div>
        </ReferencesCard>

        <ReferencesCard>
          <CardTitle
            img={history}
            title="Founding History"
            color="bg-caarya-blue-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "0-1 Startups Founded",
                  value: "0-1",
                  flag: "green",
                },
                {
                  label: "2-4 Startups Founded",
                  value: "2-4",
                  flag: "white",
                },
                {
                  label: "4+ Startups Founded",
                  value: "4+",
                  flag: "red",
                },
              ]}
              data={founderData}
              field="startupFounded"
              onCheck={(val) => {
                doSusCheck("founder", "startupFounded", val);
              }}
            />

            <InsightsCard
              data={founderData}
              field="startupFounded"
              setData={(val) => {
                setFounderData(val);
              }}
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some help and guidance in building their startup"
            />
          </div>
        </ReferencesCard>
      </div>
    </div>
  );
};

export default FounderInfo;
