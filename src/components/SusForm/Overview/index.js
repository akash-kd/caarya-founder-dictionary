import React from "react";

import { BsCheckCircle } from "react-icons/bs";

// SVG Icons
const scroll = "/assets/svg/pages/overview/fi_10237168.svg";
const idea = "/assets/svg/pages/Idea.svg";
import ImageSelector from "components/Comman/Inputs/ImageSelector";

const Overview = ({ companyData, setCompanyData }) => {
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

      <div className="flex flex-col flex-start gap-6 sm:px-6 pt-2 pb-20 ">
        <div className="p-4 flex flex-col flex-start gap-3 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
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

        <div className="flex flex-col sm:flex-row p-4 gap-3 items-center relative">
          <div className="flex flex-1 flex-col gap-3">
            <BsCheckCircle
              size="32px"
              color="#CFCDC9"
              className="absolute top-2 right-2"
            />
            <div className="font-inter text-lg font-semibold">Company Logo</div>
            {console.log(companyData)}{" "}
            <ImageSelector
              onSuccess={(val) => {
                console.log(val);
                setCompanyData({
                  ...companyData,
                  image: val,
                  imageId: val?.id,
                });
              }}
              onDelete={() => {
                setCompanyData({
                  ...companyData,
                  image: null,
                  imageId: null,
                });
              }}
              image={companyData?.image?.url}
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

        <div className="flex flex-col sm:flex-row flex-start p-4 gap-3 items-center relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
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
      </div>
    </div>
  );
};

export default Overview;
