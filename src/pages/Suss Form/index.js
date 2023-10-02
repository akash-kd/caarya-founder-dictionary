import React, { useState } from "react";
import Overview from "components/SusForm/Overview";
import PageHeader from "components/Layout/PageHeader";
import FounderInfo from "components/SusForm/FounderInfo";
import CompanyInfo from "components/SusForm/CompanyInfo";
import DigitalFootprint from "components/SusForm/DigitalFootprint";
import ProductInfo from "components/SusForm/ProductInfo";
import Tabs from "components/SusForm/Common/Tabs";

import overview from "assets/svg/fi_3135791.svg";
import founder from "assets/svg/founder.svg";
import company from "assets/svg/company.svg";
import web from "assets/svg/footprint.svg";
import product from "assets/svg/product.svg";

const SussForm = () => {
  const tabs = [
    {
      label: "Overview",
      icon: overview,
      value: "overview",
    },
    {
      label: "Founder Info",
      icon: founder,
      value: "founder",
    },
    {
      label: "Company Info",
      icon: company,
      value: "company",
    },
    {
      label: "Digital Footprint",
      icon: web,
      value: "footprint",
    },
    {
      label: "Product Info",
      icon: product,
      value: "product",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="bg-[#F0F3F4]">
      {/* <PageHeader name="New Suss Form"/> */}
      <PageHeader
        name="New Suss Form"
        ctaComponent={
          <div className="flex px-6 py-4 gap-4 items-center">
            <div className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border border-primary-orange-500 cursor-pointer">
              <h1 className="text-base font-inter font-semibold text-primary-orange-500">
                Save as Draft
              </h1>
            </div>
            <div className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border bg-primary-orange-500 cursor-pointer">
              <h1 className="text-base font-inter font-semibold text-white">
                Submit
              </h1>
            </div>
          </div>
        }
      />

      <div className="flex flex-col lg:px-8 py-4 gap-2 bg-white">
        {/* Add the toggle bar - Not Added Yet */}
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {selectedTab === "overview" && <Overview />}
        {selectedTab === "founder" && <FounderInfo />}
        {selectedTab === "company" && <CompanyInfo />}
        {selectedTab === "footprint" && <DigitalFootprint />}
        {selectedTab === "product" && <ProductInfo />}
      </div>
    </div>
  );
};

export default SussForm;
