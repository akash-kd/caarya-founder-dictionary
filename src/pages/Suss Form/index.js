import React from "react";
import Overview from "./Overview";
import { BsCheckCircle } from "react-icons/bs";
import FounderInfo from "./FounderInfo";
import CompanyInfo from "./CompanyInfo";
import DigitalFootprint from "./DigitalFootprint";

const SussForm = () => {
  return (
    <div>
      {/* <PageHeader name="New Suss Form"/> */}
      <div className="flex px-6 py-4 gap-4 items-center border-b-2 border-gray-200">
        <div className="flex-[1_0_0] text-xl font-medium font-poppins">
          New Suss Form
        </div>
        <div className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border border-primary-orange-500">
          <h1 className="text-base font-inter font-semibold text-primary-orange-500">
            Save as Draft
          </h1>
        </div>
        <div className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border bg-primary-orange-500">
          <h1 className="text-base font-inter font-semibold text-white">
            Submit
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-8 py-4 gap-2">
        {/* Add the toggle bar - Not Added Yet*/}

        {/* <Overview /> */}
        {/* <FounderInfo /> */}
        {/* <CompanyInfo /> */}
        <DigitalFootprint />
      </div>
    </div>
  );
};

export default SussForm;
