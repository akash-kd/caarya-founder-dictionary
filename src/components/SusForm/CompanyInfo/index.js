import React from "react";

import { BsCheckCircle } from "react-icons/bs";

const company = "assets/svg/pages/companyInfo/fi_4300058.svg";
const location = "assets/svg/pages/companyInfo/fi_819865.svg";
const funding = "assets/svg/pages/companyInfo/fi_2163226.svg";
const rocket = "assets/svg/pages/companyInfo/fi_10273288.svg";
const employee = "assets/svg/pages/companyInfo/fi_10216679.svg";
const revenue = "assets/svg/pages/companyInfo/fi_10693560.svg";

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

        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={rocket}
            title="Company Age"
            color="bg-caarya-blue-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "0-5 Years Old",
                  value: "0-5",
                  flag: "green",
                },
                {
                  label: "6-10 Years Old",
                  value: "6-10",
                  flag: "white",
                },
                {
                  label: "10+ Years Old",
                  value: "10+",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="companyAge"
              onCheck={(val) => {
                doSusCheck("startup", "companyAge", val, "ageOfCompany");
              }}
            />
            <InsightsCard
              data={companyData}
              field="companyAge"
              setData={(val) => {
                setCompanyData(val);
              }}
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
          <CardTitle img={funding} title="Funding" color="bg-[#F3FFF2]" />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "Bootstrapped/Pre-Seed",
                  value: "Bootstrapped/Pre-Seed",
                  flag: "green",
                },
                {
                  label: "Seed Funding",
                  value: "Seed Funding",
                  flag: "white",
                },
                {
                  label: "Series A,B,C",
                  value: "Series A,B,C",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="fundingRounds"
              onCheck={(val) => {
                doSusCheck("startup", "fundingRounds", val, "funding");
              }}
            />
            <InsightsCard
              data={companyData}
              field="fundingRounds"
              setData={(val) => {
                setCompanyData(val);
              }}
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
            img={employee}
            title="No. of Employees"
            color="bg-primary-labs-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "1-10 Employees",
                  value: "1-10",
                  flag: "green",
                },
                {
                  label: "11-30 Employees",
                  value: "11-30",
                  flag: "white",
                },
                {
                  label: "30+ Employees",
                  value: "30+",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="numOfEmployees"
              onCheck={(val) => {
                doSusCheck("startup", "numOfEmployees", val);
              }}
            />
            <InsightsCard
              data={companyData}
              field="numOfEmployees"
              setData={(val) => {
                setCompanyData(val);
              }}
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
            img={revenue}
            title="Company Revenue"
            color="bg-primary-fusion-30"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "₹ 0-5 Cr.",
                  value: "0-5 Cr.",
                  flag: "green",
                },
                {
                  label: "₹ 6-10 Cr.",
                  value: "6-10 Cr.",
                  flag: "white",
                },
                {
                  label: "+ ₹ 10 Cr.",
                  value: "10+ Cr.",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="revenue"
              onCheck={(val) => {
                doSusCheck("startup", "revenue", val, "currentRevenue");
              }}
            />
            <InsightsCard
              data={companyData}
              field="revenue"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder="eg., the current status of their startups, their names and the links to each of them"
              ideaText="Having little or no experience in building a company means that the founder could use some  help and guidance in building their startup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
