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
import { createEntity, getSusFlag } from "config/APIs/startup";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";
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

const SussForm = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("overview");
  const [companyData, setCompanyData] = useState({});
  const [founderData, setFounderData] = useState({});

  const doSusCheck = async (type, field, value) => {
    try {
      let res = await getSusFlag({ type, field, value });
      let data = res?.data;
      if (type == "founder") {
        setFounderData({
          ...founderData,
          [field]: {
            value: value,
            susCheck: data?.susCheck,
          },
        });
      } else {
        setCompanyData({
          ...companyData,
          [field]: {
            value: value,
            susCheck: data?.susCheck,
          },
        });
      }
      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  const submit = async () => {
    try {
      let res = await createEntity({
        ...companyData,
        values: [companyData?.values],
        founder: founderData,
      });
      let data = res?.data;

      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#F0F3F4]">
      <PageHeader
        name="New Suss Form"
        ctaComponent={
          <div className="flex px-6 py-4 gap-4 items-center">
            <div className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border border-primary-orange-500 cursor-pointer">
              <h1 className="text-base font-inter font-semibold text-primary-orange-500">
                Save as Draft
              </h1>
            </div>
            <div
              onClick={() => {
                submit();
              }}
              className="flex px-6 py-3 items-center justify-center gap-2 rounded-lg border bg-primary-orange-500 cursor-pointer"
            >
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

        {selectedTab === "overview" && (
          <Overview
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founderData}
            setFounderData={setFounderData}
          />
        )}
        {selectedTab === "founder" && (
          <FounderInfo
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founderData}
            setFounderData={setFounderData}
            doSusCheck={doSusCheck}
          />
        )}
        {selectedTab === "company" && (
          <CompanyInfo
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founderData}
            setFounderData={setFounderData}
            doSusCheck={doSusCheck}
          />
        )}
        {selectedTab === "footprint" && (
          <DigitalFootprint
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founderData}
            setFounderData={setFounderData}
            doSusCheck={doSusCheck}
          />
        )}
        {selectedTab === "product" && (
          <ProductInfo
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founderData}
            setFounderData={setFounderData}
            doSusCheck={doSusCheck}
          />
        )}
      </div>
    </div>
  );
};

export default SussForm;
