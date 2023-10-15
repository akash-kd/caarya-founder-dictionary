import React, { useState } from "react";
import Overview from "components/SusForm/Overview";
import PageHeader from "components/Layout/PageHeader";
import FounderInfo from "components/SusForm/FounderInfo";
import CompanyInfo from "components/SusForm/CompanyInfo";
import DigitalFootprint from "components/SusForm/DigitalFootprint";
import ProductInfo from "components/SusForm/ProductInfo";
import { createEntity, getSusFlag } from "config/APIs/startup";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";
import ChronosButton from "components/Comman/Buttons";
import { LongTabs } from "components/Comman/Tabs";
import { useHistory } from "react-router-dom";
import Drafts from "components/ResearchBank/Drafts";
import Completed from "components/ResearchBank/Completed";
const tabs = [
  {
    label: "Drafts",
    value: "draft",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

const ResearchBank = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("draft");
  const [companyData, setCompanyData] = useState({});
  const [founders, setFounders] = useState([{}]);

  return (
    <div className="sticky-thc h-[90vh] lg:h-auto">
      <PageHeader
        name="Research Bank"
        ctaComponent={
          <div className="flex gap-4 items-center">
            <ChronosButton
              text="New Startup Story"
              primary
              onClick={() => {
                history.push("/home/sus");
              }}
            />
          </div>
        }
      />

      <div className="flex flex-col space-y-5 bg-white relative">
        <div id="tabs" className="bg-white z-40">
          <LongTabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        {selectedTab == "draft" && <Drafts />}
        {selectedTab == "completed" && <Completed />}
      </div>
    </div>
  );
};

export default ResearchBank;
