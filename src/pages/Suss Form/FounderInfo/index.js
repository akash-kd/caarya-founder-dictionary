import React from "react";

import { BsCheckCircle, BsFlagFill } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import { MdInsights } from "react-icons/md";
import founder from "../../../assets/svg/fi_8677126.svg";
import cake from "../../../assets/svg/Cake.svg";
import idea from "../../../assets/svg/Idea.svg";
import brownie from "../../../assets/svg/Brownie.svg";
import history from "../../../assets/svg/fi_11244276.svg";

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
            <div className="flex flex-start gap-4">
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#33A329" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    Age is less than 25 Years
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#E7E6E5" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    Age is between 25-32 Years
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#FB6F60" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    Age is More than 32 Years
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
            </div>

            <div className="flex items-center gap-20">
              <div className="flex flex-1 flex-col flex-start gap-10">
                <div className="flex flex-col items-center flex-start gap-4">
                  <div className="flex items-center gap-4 self-stretch">
                    <ImQuotesRight size="20px" color="#D8F3D7" />
                    <h1 className="flex flex-1 text-sm font-inter font-semibold text-neutral-500">
                      Cite Your Sources
                    </h1>
                    <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
                      <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                        ?
                      </h1>
                    </div>
                  </div>
                  <input
                    placeholder="Add source link here"
                    className="flex py-3 px-4 rounded-lg border border-neutral-300 self-stretch"
                  />
                </div>

                <div className="flex flex-col items-center flex-start gap-4">
                  <div className="flex items-center gap-4 self-stretch">
                    <MdInsights size="20px" color="#8DA1FC" />
                    <h1 className="flex text-sm font-inter font-semibold text-neutral-500">
                      Researcher Insight
                    </h1>
                    <div className="flex flex-1 px-2 gap-1 items-center">
                      <img src={brownie} alt="" className="w-4 h-4" />
                      <h1 className="font-inter text-xs font-semibold text-[#FFBC00]">
                        +1
                      </h1>
                    </div>
                    <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
                      <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                        ?
                      </h1>
                    </div>
                  </div>
                  <input
                    placeholder=" eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
                    className="flex items-start py-3 px-4 rounded border border-neutral-300 self-stretch h-[88px] placeholder:text-sm placeholder:flex placeholder:items-center placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col flex-start gap-4 pl-10 pt-6 pr-6 pb-8 grad">
                <img src={idea} alt="" className="w-6 h-6" />
                <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
                  Age is an indicator of a person's risk taking tendencies.
                  Younger founders tend to be more open to risks.
                </p>
              </div>
            </div>
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
            <div className="flex flex-start gap-4">
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#33A329" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    0-1 Startups Founded
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#E7E6E5" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    2-4 Startups Founded
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
              <div className="flex flex-1 px-6 py-8 h-[80px] items-center rounded-lg border border-neutral-300 relative">
                <div className="flex flex-1 items-center justify-center gap-3">
                  <BsFlagFill size="20px" color="#FB6F60" />
                  <h1 className="font-inter text-sm font-semibold text-neutral-800">
                    4+ Startups Founded
                  </h1>
                </div>
                <input
                  type="radio"
                  className="absolute right-[8.33px] top-[8px] w-4 h-4"
                />
              </div>
            </div>

            <div className="flex items-center gap-20">
              <div className="flex flex-1 flex-col flex-start gap-10">
                <div className="flex flex-col items-center flex-start gap-4">
                  <div className="flex items-center gap-4 self-stretch">
                    <ImQuotesRight size="20px" color="#D8F3D7" />
                    <h1 className="flex flex-1 text-sm font-inter font-semibold text-neutral-500">
                      Cite Your Sources
                    </h1>
                    <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
                      <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                        ?
                      </h1>
                    </div>
                  </div>
                  <input
                    placeholder="Add source link here"
                    className="flex py-3 px-4 rounded-lg border border-neutral-300 self-stretch"
                  />
                </div>

                <div className="flex flex-col items-center flex-start gap-4">
                  <div className="flex items-center gap-4 self-stretch">
                    <MdInsights size="20px" color="#8DA1FC" />
                    <h1 className="flex text-sm font-inter font-semibold text-neutral-500">
                      Researcher Insight
                    </h1>
                    <div className="flex flex-1 px-2 gap-1 items-center">
                      <img src={brownie} alt="" className="w-4 h-4" />
                      <h1 className="font-inter text-xs font-semibold text-[#FFBC00]">
                        +1
                      </h1>
                    </div>
                    <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
                      <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                        ?
                      </h1>
                    </div>
                  </div>
                  <input
                    placeholder="eg., the current status of their startups, their names and the links to each of them"
                    className="flex items-start py-3 px-4 rounded border border-neutral-300 self-stretch h-[88px] placeholder:text-sm placeholder:flex placeholder:items-center placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col flex-start gap-4 pl-10 pt-6 pr-6 pb-8 grad">
                <img src={idea} alt="" className="w-6 h-6" />
                <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
                  Having little or no experience in building a company means
                  that the founder could use some help and guidance in building
                  their startup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderInfo;
