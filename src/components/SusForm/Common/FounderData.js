import React from "react";

const cake = "/assets/svg/pages/founderInfo/Cake.svg";
const history = "/assets/svg/pages/founderInfo/fi_11244276.svg";
const history1 = "/assets/svg/pages/founderInfo/1.svg";

import RadioCard from "components/SusForm/Common/SusCheckRadioCard";
import InsightsCard from "components/SusForm/Common/InsightsCard";
import CardTitle from "../Common/CardTitle";
import ReferencesCard from "../Common/ReferencesCard";
import { getSusFlag } from "config/APIs/startup";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";

const FounderData = ({ data, setData }) => {
  const dispatch = useDispatch();
  const doSusCheck = async (field, value, alternateField) => {
    try {
      let res = await getSusFlag({ type: "founder", field, value });
      let resData = res?.data;
      let val = {
        [field]: {
          value: value,
          susCheck: resData?.susCheck,
        },
      };
      if (alternateField) {
        val[alternateField] = value;
      }

      setData({
        ...data,
        ...val,
      });

      dispatch(showToast({ message: data?.message }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col flex-start px-4 pt-4 pb-20 gap-6">
      <div className="flex flex-col flex-start lg:p-4 gap-3">
        <h1 className="font-inter text-lg font-semibold text-neutral-800">
          Founder Name
        </h1>
        <input
          value={data?.name || ""}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          placeholder="Add Name"
          className="flex px-4 py-3 items-center max-w:[483px] rounded-lg border border-neutral-300"
        />
      </div>

      <div className="flex flex-col flex-start lg:p-4 gap-3">
        <h1 className="font-inter text-lg font-semibold text-neutral-800">
          Founder Email
        </h1>
        <input
          value={data?.email || ""}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          placeholder="Add Email Address"
          className="flex px-4 py-3 items-center max-w:[483px] rounded-lg border border-neutral-300"
        />
      </div>

      <ReferencesCard>
        <CardTitle
          img={cake}
          title="Founder's Age"
          color="bg-primary-fusion-30"
        />

        <div className="flex flex-col flex-start gap-16">
          <RadioCard
            list={[
              {
                label: "Age is less than 25 Years",
                value: "Less than 25",
                flag: "green",
              },
              {
                label: "Age is between 25-32 Years",
                value: "Between 25-32",
                flag: "white",
              },
              {
                label: "Age is More than 32 Years",
                value: "More than 32",
                flag: "red",
              },
            ]}
            data={data}
            field="age"
            onCheck={(val) => {
              doSusCheck("age", val);
            }}
          />

          <InsightsCard
            data={data}
            field="age"
            setData={(val) => {
              setData(val);
            }}
            placeholder="eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
            ideaText="Age is an indicator of a person's risk taking tendencies. Younger founders tend to be more open to risks."
          />
        </div>
      </ReferencesCard>

      <ReferencesCard>
        <CardTitle
          img={history1}
          title="Work History"
          color="bg-fusion-secondary-30"
        />

        <div className="flex flex-col flex-start gap-16">
          <RadioCard
            list={[
              {
                label: "Has less than 2 years of work ex.",
                value: "0-1",
                flag: "green",
              },
              {
                label: "Has 2-6 years of work ex.",
                value: "2-6",
                flag: "white",
              },
              {
                label: "Has more than 6 years of work ex.",
                value: "6+",
                flag: "red",
              },
            ]}
            data={data}
            field="workHistory"
            onCheck={(val) => {
              doSusCheck("workHistory", val);
            }}
          />

          <InsightsCard
            data={data}
            field="workHistory"
            setData={(val) => {
              setData(val);
            }}
            placeholder=" eg., pointing out if the founder has any experience in the industry they are building their startup or any other experience that might be relevant to their current venture"
            ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
          />
        </div>
      </ReferencesCard>

      <ReferencesCard>
        <CardTitle
          img={history}
          title="Founding History"
          color="bg-caarya-blue-30"
        />

        <div className="flex flex-col flex-start gap-16">
          <RadioCard
            list={[
              {
                label: "0-1 Startups Founded",
                value: "0-1",
                flag: "green",
              },
              {
                label: "2-4 Startups Founded",
                value: "2-4",
                flag: "white",
              },
              {
                label: "4+ Startups Founded",
                value: "4+",
                flag: "red",
              },
            ]}
            data={data}
            field="startupFounded"
            onCheck={(val) => {
              doSusCheck("startupFounded", val, "startupFoundedCount");
            }}
          />

          <InsightsCard
            data={data}
            field="startupFounded"
            setData={(val) => {
              setData(val);
            }}
            placeholder="eg., the current status of their startups, their names and the links to each of them"
            ideaText="Having little or no experience in building a company means that the founder could use some help and guidance in building their startup"
          />
        </div>
      </ReferencesCard>
    </div>
  );
};

export default FounderData;
