import React, { useState } from "react";
import Overview from "components/SusForm/Overview";
import PageHeader from "components/Layout/PageHeader";
import FounderInfo from "components/SusForm/FounderInfo";
import CompanyInfo from "components/SusForm/CompanyInfo";
import DigitalFootprint from "components/SusForm/DigitalFootprint";
import ProductInfo from "components/SusForm/ProductInfo";
import Tabs from "components/SusForm/Common/Tabs";

const overview = "/assets/svg/pages/fi_3135791.svg";
const founder = "/assets/svg/pages/founder.svg";
const company = "/assets/svg/pages/company.svg";
const web = "/assets/svg/pages/footprint.svg";
const product = "/assets/svg/pages/product.svg";

const selectedOverview = "/assets/svg/pages/tabs/fi_3135791.svg";
const selectedFounder = "/assets/svg/pages/tabs/fi_8677126.svg";
const selectedCompany = "/assets/svg/pages/selectedCompany.svg";
const selectedWeb = "/assets/svg/pages/selectedFootprint.svg";
const selectedProduct = "/assets/svg/pages/selectedProduct.svg";

import {
  createEntity,
  getOneEntity,
  getSusFlag,
  updateEntity,
} from "config/APIs/startup";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";
import ChronosButton from "components/Comman/Buttons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
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
  const { id } = useParams();
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
        let temp = { ...companyData };
        temp = { ...temp, ...val };
        setCompanyData(temp);
        console.log(temp);
      }

      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  const getOne = async () => {
    try {
      let res = await getOneEntity(id);
      let data = res?.data?.data;
      let { founders: f, ...c } = data;
      setCompanyData(c);
      setFounders(f);
      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  const saveAsDraft = async () => {
    if (companyData?.id) {
      try {
        let res = await updateEntity(companyData?.id, {
          ...companyData,
          values: [companyData?.values],
          founders: founders,
          isDraft: true,
        });
        let data = res?.data?.data;
        let { founders: f, ...c } = data;
        setCompanyData(c);
        setFounders(f);

        dispatch(showToast({ message: data?.message }));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let res = await createEntity({
          ...companyData,
          values: [companyData?.values],
          founders: founders,
          isDraft: true,
        });
        let data = res?.data?.data;
        let { founders: f, ...c } = data;

        setCompanyData(c);
        setFounders(f);
        dispatch(showToast({ message: data?.message }));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const submit = async () => {
    if (companyData?.id) {
      try {
        let res = await updateEntity(companyData?.id, {
          ...companyData,
          values: [companyData?.values],
          founders: founders,
          isDraft: false,
        });
        let data = res?.data?.data;
        let { founders: f, ...c } = data;

        setCompanyData(c);
        setFounders(f);
        dispatch(showToast({ message: data?.message }));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let res = await createEntity({
          ...companyData,
          values: [companyData?.values],
          founders: founders,
          isDraft: false,
        });
        let data = res?.data?.data;
        let { founders: f, ...c } = data;

        setCompanyData(c);
        setFounders(f);
        dispatch(showToast({ message: data?.message }));
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (id && id !== 0) getOne();
  }, [id]);

  return (
    <div className="sticky-thc h-[90vh] lg:h-auto">
      <PageHeader
        name="Enter Your Startup Story"
        ctaComponent={
          <div className="flex gap-4 items-center">
            <ChronosButton
              text="Save as Draft"
              secondary
              onClick={() => {
                saveAsDraft();
              }}
            />
            <ChronosButton
              text="Submit"
              primary
              onClick={() => {
                submit();
              }}
            />
          </div>
        }
      />

      <div className="flex flex-col lg:px-8 py-4 gap-2 bg-white relative">
        <div id="tabs" className="bg-white z-40">
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
