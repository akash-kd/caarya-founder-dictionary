import React, { useState } from "react";
import Overview from "components/SusForm/Overview";
import PageHeader from "components/Layout/PageHeader";
import FounderInfo from "components/SusForm/FounderInfo";
import CompanyInfo from "components/SusForm/CompanyInfo";
import DigitalFootprint from "components/SusForm/DigitalFootprint";
import ProductInfo from "components/SusForm/ProductInfo";
import Tabs from "components/SusForm/Common/Tabs";

const overview = "assets/svg/pages/fi_3135791.svg";
const founder = "assets/svg/pages/founder.svg";
const company = "assets/svg/pages/company.svg";
const web = "assets/svg/pages/footprint.svg";
const product = "assets/svg/pages/product.svg";

const selectedOverview = "assets/svg/pages/tabs/fi_3135791.svg";
const selectedFounder = "assets/svg/pages/tabs/fi_8677126.svg";
const selectedCompany = "assets/svg/pages/selectedCompany.svg";
const selectedWeb = "assets/svg/pages/selectedFootprint.svg";
const selectedProduct = "assets/svg/pages/selectedProduct.svg";

import { createEntity, getSusFlag } from "config/APIs/startup";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";
const tabs = [
  {
    label: "Overview",
    icon: overview,
    selectedIcon: selectedOverview,
    value: "overview",
  },
  {
    label: "Founder Info",
    icon: founder,
    selectedIcon: selectedFounder,
    value: "founder",
  },
  {
    label: "Company Info",
    icon: company,
    selectedIcon: selectedCompany,
    value: "company",
  },
  {
    label: "Digital Footprint",
    icon: web,
    selectedIcon: selectedWeb,
    value: "footprint",
  },
  {
    label: "Product Info",
    icon: product,
    selectedIcon: selectedProduct,
    value: "product",
  },
];

const SussForm = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("overview");
  const [companyData, setCompanyData] = useState({});
  const [founders, setFounders] = useState([{}]);

  const doSusCheck = async (type, field, value, alternateField) => {
    try {
      let res = await getSusFlag({ type, field, value });
      let data = res?.data;
      let val = {
        [field]: {
          value: value,
          susCheck: data?.susCheck,
        },
      };
      if (alternateField) {
        val[alternateField] = value;
      }

      if (type == "startup") {
        setCompanyData({
          ...companyData,
          ...val,
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
        founders: founders,
      });
      let data = res?.data;

      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#F0F3F4] sticky-thc h-[90vh] lg:h-auto">
      <PageHeader
        name="Enter Your Startup Story"
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

      <div className="flex flex-col lg:px-8 py-4 gap-2 bg-white relative">
        <div id="tabs" className="bg-white z-40">
          {/* Add the toggle bar - Not Added Yet */}
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>

        {selectedTab === "overview" && (
          <Overview companyData={companyData} setCompanyData={setCompanyData} />
        )}
        {selectedTab === "founder" && (
          <FounderInfo founderData={founders} setFounderData={setFounders} />
        )}
        {selectedTab === "company" && (
          <CompanyInfo
            companyData={companyData}
            setCompanyData={setCompanyData}
            founderData={founders}
            setFounderData={setFounders}
            doSusCheck={doSusCheck}
          />
        )}
        {selectedTab === "footprint" && (
          <DigitalFootprint
            companyData={companyData}
            setCompanyData={setCompanyData}
            doSusCheck={doSusCheck}
          />
        )}
        {selectedTab === "product" && (
          <ProductInfo
            companyData={companyData}
            setCompanyData={setCompanyData}
          />
        )}
      </div>
    </div>
  );
};

export default SussForm;
