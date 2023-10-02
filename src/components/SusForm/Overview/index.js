import React from "react";

import { RiUploadCloudLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

// SVG Icons
import scroll from "assets/svg/fi_10237168.svg";
import idea from "assets/svg/Idea.svg";
import web from "assets/svg/fi_10218756.svg";
import about from "assets/svg/fi_10166120.svg";

const Overview = ({
  companyData,
  setCompanyData,
  founderData,
  setFounderData,
}) => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={scroll} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Overview
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      <div className="flex flex-col flex-start gap-6 sm:px-6 pt-2 pb-20">
        <div className="p-4 flex flex-col flex-start gap-3">
          <div className="font-inter text-lg font-semibold">Startup Name</div>
          <input
            value={companyData?.name}
            onChange={(e) => {
              setCompanyData({ ...companyData, name: e.target.value });
            }}
            type="text"
            className="max-w-[483px] border border-neutral-300 px-4 py-3 rounded-lg"
            placeholder="Add name"
          />
        </div>

        <div className="flex flex-col sm:flex-row p-4 gap-3 items-center">
          <div className="flex flex-1 flex-col gap-3">
            <div className="font-inter text-lg font-semibold">Company Logo</div>
            <div className="flex max-w-[420px] md:min-w-[420px] py-8 px-20 flex-col gap-2 items-center justify-center bg-neutral-50 rounded-lg shadow-inner">
              <div className="flex flex-col gap-2 sm:px-6 items-center">
                <RiUploadCloudLine size="32" color="#CFCDC9" />
                <div className="text-sm font-semibold font-inter text-neutral-300 text-enter">
                  Upload Picture
                </div>
                <div className="text-[10px] font-semibold font-inter text-neutral-300 text-center">
                  Supported formats: .JPG, .JPEG, .PNG
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-start justify-center sm:px-6 py-4 max-w-[488px] max-h-[138px] gap-4 rounded-tl-[40px] rounded-bl-[96px]">
            <img src={idea} alt="" className="w-6 h-6" />
            <p className="font-inter text-sm font-light text-neutral-500 max-w-[640px]">
              Uploading company logo helps differentiate multiple companies that
              might have the same name
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-start p-4 gap-3 items-center">
          <div className="sm:p-4 flex flex-[1_0_0] max-sm:w-full flex-col flex-start gap-3">
            <div className="font-inter text-lg font-semibold">
              Startup Industry
            </div>
            <input
              value={companyData?.industry}
              onChange={(e) => {
                setCompanyData({ ...companyData, industry: e.target.value });
              }}
              type="text"
              className="max-w-[483px] md:min-w-[420px] border border-neutral-300 px-4 py-3 rounded-lg"
              placeholder="Add industry"
            />
          </div>

          <div className="flex flex-col flex-start justify-center sm:px-6 py-4 max-w-[488px] max-h-[138px] gap-4 rounded-tl-[40px] rounded-bl-[96px]">
            <img src={idea} alt="" className="w-6 h-6" />
            <p className="font-inter text-sm font-light text-neutral-500 max-w-[640px]">
              Uploading company logo helps differentiate multiple companies that
              might have the same name
            </p>
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <img src={web} alt="" className="w-6 h-6" />
            <h1 className="font-inter text-neutral-800 font-semibold text-lg">
              Online Presence
            </h1>
          </div>

          <div className="flex flex-col flex-start gap-4">
            <div className="flex "></div>
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <img src={about} alt="" className="w-6 h-6" />
            <h1 className="font-inter text-neutral-800 font-semibold text-lg">
              About Company
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:gap-20">
            <div className="flex flex-[1_0_0] w-full flex-col flex-start gap-10">
              <div className="flex max-sm:w-full flex-col w-full gap-3 flex-start">
                <h1 className="font-inter text-sm font-semibold text-neutral-500">
                  Company Mission Statement
                </h1>
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
              </div>
              <div className="flex flex-col gap-3 flex-start">
                <h1 className="font-inter text-sm font-semibold text-neutral-500">
                  Company Vision Statement
                </h1>
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
              </div>
              <div className="flex flex-col gap-3 flex-start">
                <h1 className="font-inter text-sm font-semibold text-neutral-500">
                  Company Values
                </h1>
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
              </div>
            </div>

            <div className="flex flex-col flex-start justify-center sm:px-6 py-4 max-w-[488px] max-h-[138px] gap-4 rounded-tl-[40px] rounded-bl-[96px]">
              <img src={idea} alt="" className="w-6 h-6" />
              <p className="font-inter text-sm font-light text-neutral-500 max-w-[640px]">
                Uploading company logo helps differentiate multiple companies
                that might have the same name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
