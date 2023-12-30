import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ChevronRightIcon } from "@heroicons/react/solid";
import { BsGlobe2 } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";
import { MdPerson } from "react-icons/md";
import { ArrowForward } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";
import { getAllEntity } from "config/APIs/startup";

const StartUp = () => {
  const details = [
    {
      name: "General Information",
      list: [
        {
          heading: "Company Name",
          apiHeading: "name",
          missingText: "Company Name Here",
        },
        { heading: "Industry", apiHeading: "industry", missingText: "Missing" },
        {
          heading: "Description",
          apiHeading: "description",
          missingText: "Missing",
        },
        {
          heading: "Founding Date",
          apiHeading: "foundingDate",
          missingText: "Missing",
        },
        {
          heading: "Location",
          apiHeading: "workLocation",
          missingText: "Missing",
        },
      ],
    },
    {
      name: "Company Motto",
      list: [
        { heading: "Mission", apiHeading: "mission", missingText: "Missing" },
        { heading: "Vision", apiHeading: "vision", missingText: "Missing" },
        { heading: "Values", apiHeading: "values", missingText: "Missing" },
      ],
    },
    {
      name: "Operational Details",
      list: [
        {
          heading: "Company Age",
          apiHeading: "companyAge",
          missingText: "Missing",
        },
        { heading: "Company Size", apiHeading: "", missingText: "Missing" },
        {
          heading: "Funding Status",
          apiHeading: "funding",
          missingText: "Missing",
        },
        {
          heading: "Total Revenue",
          apiHeading: "revenue",
          missingText: "Missing",
        },
      ],
    },
    {
      name: "Digital Footprint",
      list: [
        {
          heading: "Company Website",
          apiHeading: "website",
          missingText: "Missing",
        },
        {
          heading: "Company Instagram",
          apiHeading: "instagram",
          missingText: "Missing",
        },
        {
          heading: "Instagram Followers",
          apiHeading: "x",
          missingText: "Missing",
        },
        {
          heading: "Company Linkedin",
          apiHeading: "linkedIn",
          missingText: "Missing",
        },
        {
          heading: "LinkedIn Followers",
          apiHeading: "x",
          missingText: "Missing",
        },
      ],
    },
    {
      name: "Founder Details",
      list: [
        {
          heading: "No. of Founders",
          apiHeading: "founders",
          missingText: "Missing",
        },
        { heading: "Founder Names", apiHeading: "x", missingText: "Missing" },
        { heading: "Founder Ages", apiHeading: "x", missingText: "Missing" },
      ],
    },
  ];
  const params = useParams();
  const [startup, setStartup] = useState({});

  useEffect(() => {
    let isMounted = true;

    const getStartupData = async () => {
      try {
        console.log(params);
        const res = await getAllEntity(params);

        if (res?.data?.data && isMounted) {
          setStartup(res?.data?.data[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getStartupData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-start self-stretch bg-white">
      {console.log(startup)}
      <div className="px-4 pt-4 pb-2 flex flex-start">
        <div className="flex flex-start gap-2 text-2x text-neutral-300 font-inter font-semibold">
          <ChevronRightIcon className="w-4 text-neutral-300" />
          <p className="text-neutral-300">Nexus Bank</p>
          <ChevronRightIcon className="w-4 text-neutral-500" />
          <p className="text-neutral-500">{startup?.name || "Company Name"}</p>
        </div>
      </div>

      <div className="flex p-4 flex-col items-start gap-6 w-full">
        <div className="flex justify-between items-center  self-stretch">
          <div className="flex p-2 justify-center items-center">
            <ArrowBack fontSize="24px" />
          </div>
          <h4 className="font-satoshi text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#A193F2] to-[#C44EB9]">
            1% Complete
          </h4>
        </div>

        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex py-4 flex-col items-center gap-4 self-stretch">
            <div className="flex p-2 justify-center items-center ">
              <img
                src={startup?.image || "/assets/images/no logo.svg"}
                alt=""
                className="w-16 h-16"
              />
            </div>
            <h1 className="font-satoshi font-bold text-2.5xl ">
              {startup?.name || "Company Name Here"}
            </h1>
            <h3 className="text-neutral-800 font-lato text-sm font-semibold italic">
              {startup?.industry || "Industry Missing"}
            </h3>

            {startup?.description ? (
              <h3 className="text-neutral-500 font-lato text-xs font-light self-stretch">
                {startup.description}
              </h3>
            ) : (
              <h3 className="text-neutral-300 text-center font-lato text-xs italic font-normal bg-neutral-50 py-6 w-full rounded-2xl">
                Company Description Missing
              </h3>
            )}
          </div>

          <div className="flex px-4 flex-col justify-center items-start gap-6 self-stretch">
            <div className="flex items-center gap-4">
              <BsGlobe2 />
              <h1 className="text-neutral-800 font-lato text-center text-sm italic font-light truncate">
                {startup?.website || "Website Missing"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <FiInstagram />
              <h1 className="text-neutral-800 font-lato text-center text-sm italic font-light truncate">
                {startup?.instagram || "Instagram Details Missing"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ImLinkedin />
              <h1 className="text-neutral-800 font-lato text-center text-sm italic font-light truncate">
                {startup?.linkedIn || "LinkedIn Details Missing"}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex py-8 flex-col justify-center items-center self-stretch">
          <div className="flex pl-8 pt-[18px] pr-[18px] pb-[18px] gap-2 craft-startup-button h-[60px]">
            <h1 className="text-neutral-50 font-lato text-base font-semibold">
              Craft Startup Story
            </h1>
            <ArrowForward style={{ color: "white" }} />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch">
          <h1 className="font-satoshi text-xl font-medium ">Founders</h1>
          {startup?.founders &&
            startup.founders.map((founder) => {
              return (
                <div className="flex p-2 items-start gap-4 items-stretch self-stretch flex-wrap">
                  <div className="flex w-16 h-16 justify-center items-center rounded-full bg-neutral-100 shadow-md">
                    {founder?.image ? (
                      <img src={founder?.image} className="rounded-full" />
                    ) : (
                      <MdPerson className="text-[40px] text-neutral-300" />
                    )}
                  </div>

                  <div className="flex flex-col flex-start flex-[1_0_0] self-stretch">
                    <h1 className="font-lato text-[18px] font-semibold ">
                      {founder?.name || "Founder Name"}
                    </h1>
                    <h3
                      className={`text-neutral-500 font-lato text-2xs font-normal ${
                        !founder?.email ? "italic" : ""
                      }`}
                    >
                      {founder?.email || "founder email missing"}
                    </h3>
                    <div className="flex px-2 py-3 justify-between items-start self-stretch w-full">
                      <div className="flex flex-col justify-center items-start gap-[2px]">
                        <h1 className="text-neutral-800 text-sm font-lato font-semibold">
                          5+ years
                        </h1>
                        <div className="flex justify-center items-center gap-1 self-stretch">
                          <img
                            src="/assets/svg/we.svg"
                            className="w-[14px] h-[14px]"
                          />
                          <h4 className="font-lato text-neutral-500 text-[8px] font-semibold">
                            Work Experience
                          </h4>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-[2px]">
                        <h1 className="text-neutral-800 text-sm font-lato font-semibold">
                          2
                        </h1>
                        <div className="flex justify-center items-center gap-1 self-stretch">
                          <img
                            src="/assets/svg/sf.svg"
                            className="w-[14px] h-[14px]"
                          />
                          <h4 className="font-lato text-neutral-500 text-[8px] font-semibold">
                            Startups Founded
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="flex pb-20 flex-col items-start gap-6 self-stretch">
          <div className="flex items-center gap-6 self-stretch">
            <h1 className="font-satoshi text-xl font-medium flex-[1_0_0]">
              All Details
            </h1>
            <h1 className="text-[#C44EB9] font-satoshi font-medium text-sm">
              1% Complete
            </h1>
          </div>

          {details.map((detail) => {
            return (
              <div className="w-full">
                <div className="flex px-2 py-6 items-start self-stretch">
                  <h1 className="font-lato text-sm font-medium text-[#903795]">
                    {detail.name}
                  </h1>
                </div>
                {detail.list.map((item, id) => {
                  const data = startup[item.apiHeading];

                  let founderNames = [];
                  startup?.founders &&
                    startup.founders.map((founder) =>
                      founderNames.push(founder.name)
                    );

                  let founderAges = [];
                  startup?.founders &&
                    startup.founders.map(
                      (founder) => founder?.age && founderAges.push(founder.age)
                    );

                  return (
                    <div
                      className={`flex px-4 py-3 items-center gap-2 self-stretch border-l-2 border-[#C44EB9] ${
                        id % 2 === 0 ? "bg-neutral-50" : "bg-neutral-100"
                      }`}
                    >
                      <div className="flex max-w-[120px] items-center flex-[1_0_0] text-neutral-500 font-lato text-xs font-medium">
                        {item.heading}
                      </div>
                      <div className="flex px-2 justify-center items-center flex-[1_0_0] text-neutral-800 font-lato text-xs font-medium text-wrap ">
                        {item.heading === "Location"
                          ? startup[item.apiHeading]?.value || item.missingText
                          : item.heading === "Founding Date"
                          ? startup[item.apiHeading]?.value
                            ? new Date(
                                startup[item.apiHeading]?.value
                              ).toLocaleDateString()
                            : item.missingText
                          : item.heading === "Founder Names"
                          ? founderNames.toString() || item.missingText
                          : item.heading === "Founder Ages"
                          ? founderAges.toString() || item.missingText
                          : item.heading === "No. of Founders"
                          ? (startup?.founders && startup.founders.length) ||
                            item.missingText
                          : data || item.missingText}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StartUp;
