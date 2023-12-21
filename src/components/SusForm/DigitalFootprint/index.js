import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { FiActivity } from "react-icons/fi";

const web = "/assets/svg/pages/digitalFootprint/fi_2600295.svg";
const idea = "/assets/svg/pages/Idea.svg";

import CardTitle from "components/SusForm/Common/CardTitle";
import RadioCard from "components/SusForm/Common/SusCheckRadioCard";
import InsightsCard from "components/SusForm/Common/InsightsCard";
import ReferencesCard from "../Common/ReferencesCard";
import OnlinePresence from "../Overview/OnlinePresence";

const DigitalFootprint = ({ companyData, setCompanyData, doSusCheck }) => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={web} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Digital Footprint
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>

      <div className="flex flex-col flex-start px-4 pt-4 pb-20 gap-6">
        <div className="flex p-4 flex-col flex-start gap-10 relative">
          <BsCheckCircle
            size="32px"
            color="#CFCDC9"
            className="absolute top-2 right-2"
          />
          <CardTitle
            img={web}
            title="Online Presence"
            color="bg-primary-accent-50"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-20">
            <div className="flex flex-[1_0_0] flex-col flex-start gap-10">
              <OnlinePresence
                title="Website"
                placeholder="Add website link"
                presence="website"
                field="website"
                data={companyData}
                setData={setCompanyData}
              />
              <OnlinePresence
                title="Instagram"
                placeholder="Paste link to profile"
                presence="Instagram Profile"
                field="instagram"
                data={companyData}
                setData={setCompanyData}
              />
              <OnlinePresence
                title="Facebook"
                placeholder="Paste link to profile"
                presence="Facebook Profile"
                field="facebook"
                data={companyData}
                setData={setCompanyData}
              />
              <OnlinePresence
                title="Linkedin"
                placeholder="Paste link to profile"
                presence="Linkedin Profile"
                field="linkedIn"
                data={companyData}
                setData={setCompanyData}
              />
              <OnlinePresence
                title="Twitter"
                placeholder="Paste link to profile"
                presence="Twitter Profile"
                field="twitter"
                data={companyData}
                setData={setCompanyData}
              />
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

        <ReferencesCard>
          <CardTitle
            icon={<FiActivity color="#FFFFFF" size="24px" />}
            title="Last 3 Months Social Media Activity"
            color="bg-error-500"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "15+ posts across all social accounts",
                  value: "15+",
                  flag: "green",
                },
                {
                  label: "2-15 posts across all social accounts",
                  value: "2-15",
                  flag: "white",
                },
                {
                  label: ">2 posts across all social accounts",
                  value: "0-2",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="socialsActivity"
              onCheck={(val) => {
                doSusCheck("startup", "socialsActivity", val);
              }}
            />

            <InsightsCard
              data={companyData}
              field="socialsActivity"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the current status of their startups, their names and the links to each of them"
              ideaText="Brands that are relative active on social media are.........."
            />
          </div>
        </ReferencesCard>

        {/* <ReferencesCard>
          <CardTitle
            icon={<MdPeopleAlt color="#FFFFFF" size="24px" />}
            title="Social Media Presence"
            color="bg-neutral-900"
          />

          <div className="flex flex-col flex-start gap-16">
            <RadioCard
              list={[
                {
                  label: "<200 followers across all platforms",
                  value: "200+",
                  flag: "green",
                },
                {
                  label: "50-200 followers across all platforms",
                  value: "50-200",
                  flag: "white",
                },
                {
                  label: ">50 followers across all platforms",
                  value: "0-50",
                  flag: "red",
                },
              ]}
              data={companyData}
              field="socialsPresence"
              onCheck={(val) => {
                doSusCheck("startup", "socialsPresence", val);
              }}
            />

            <InsightsCard
              data={companyData}
              field="socialsPresence"
              setData={(val) => {
                setCompanyData(val);
              }}
              placeholder=" eg., the current status of their startups, their names and the links to each of them"
              ideaText="Brands that are relative active on social media are.........."
            />
          </div>
        </ReferencesCard> */}
      </div>
    </div>
  );
};

export default DigitalFootprint;
