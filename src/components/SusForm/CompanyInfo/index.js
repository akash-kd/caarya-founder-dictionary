import React from "react";

import { BsCheckCircle } from "react-icons/bs";

const company = "/assets/svg/pages/companyInfo/fi_4300058.svg";
const location = "/assets/svg/pages/companyInfo/fi_819865.svg";
const about = "/assets/svg/pages/overview/fi_10166120.svg";
const idea = "/assets/svg/pages/Idea.svg";

import CardTitle from "components/SusForm/Common/CardTitle";
import RadioCard from "components/SusForm/Common/SusCheckRadioCard";
import InsightsCard from "components/SusForm/Common/InsightsCard";

const CompanyInfo = ({ companyData, setCompanyData, doSusCheck }) => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={company} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Company Info
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      <div className="flex flex-col flex-start lg:px-4 pt-4 pb-20 gap-6">
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={about}
            title="Company Mission Statement"
            color="bg-primary-chronos-50"
          />

          <div className="flex flex-col flex-start gap-16">
            <input
              value={companyData?.mission}
              onChange={(e) => {
                setCompanyData({
                  ...companyData,
                  mission: e.target.value,
                });
              }}
              placeholder="Add mission statement"
              className="flex flex-start md:min-w-[420px] px-4 py-3 rounded-lg border border-neutral-300"
            />
            {/* <InsightsCard
              data={companyData}
              field="workLocation"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the founder's exact age"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks"
            /> */}
          </div>
        </div>
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={about}
            title="Company Vision Statement"
            color="bg-primary-chronos-50"
          />

          <div className="flex flex-col flex-start gap-16">
            <input
              value={companyData?.vision}
              onChange={(e) => {
                setCompanyData({
                  ...companyData,
                  vision: e.target.value,
                });
              }}
              placeholder="Add vision statement"
              className="flex flex-start md:min-w-[420px] px-4 py-3 rounded-lg border border-neutral-300"
            />
            {/* <InsightsCard
              data={companyData}
              field="workLocation"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the founder's exact age"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks"
            /> */}
          </div>
        </div>
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={about}
            title="Company Values"
            color="bg-primary-chronos-50"
          />

          <div className="flex flex-col flex-start gap-16">
            <input
              value={companyData?.values}
              onChange={(e) => {
                setCompanyData({
                  ...companyData,
                  values: e.target.value,
                });
              }}
              placeholder="Add values"
              className="flex flex-start md:min-w-[420px] px-4 py-3 rounded-lg border border-neutral-300 h-[120px]"
            />
            {/* <InsightsCard
              data={companyData}
              field="workLocation"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the founder's exact age"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks"
            /> */}
          </div>
        </div>
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={location}
            title="Company Work Location"
            color="bg-primary-dawn-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "Remote Work",
                  value: "Remote Work",
                  flag: "green",
                },
                {
                  label: "Hybrid Work",
                  value: "Hybrid Work",
                  flag: "white",
                },
                {
                  label: "On-Site Work",
                  value: "On-Site Work",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="workLocation"
              onCheck={(val) => {
                doSusCheck("startup", "workLocation", val, "workLocationType");
              }}
            />
            <InsightsCard
              data={companyData}
              field="workLocation"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the founder's exact age"
              ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
