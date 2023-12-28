import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/CompanyRecord";

function Chapter3A_WorkType() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);
  const [data, setData] = useState(record?.workType);
  const [error, setError] = useState();

  const onWorkTypeSelected = (option, index) => {
    setData({ ...data, workType: index });
  };

  const onNext = () => {
    if (data?.workType === undefined) {
      setError({ ...error, workType: "* select a work type" });
    } else if (!data?.city || data?.city?.length === 0) {
      setError({ ...error, city: "* select a work type" });
    } else {
      setRecord({ ...record, workType: data });
      setStage((prev) => prev + 1);
    }
  };

  console.log(data);
  return (
    <DraftLayout
      heading="Where Work Happens"
      subheading="Identify the company’s work location"
      info="Information on how this is relevant"
      chapName="Company"
      onNext={onNext}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <OptionsInput
          value={data?.workType}
          options={[
            {
              name: "Remote Work",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "Hybrid Work",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "On-Site Work",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onWorkTypeSelected}
          error={error?.workType}
        />
        {data?.workType >= 0 ? (
          <div className="flex flex-col gap-10">
            <TextInput
              value={data?.city}
              onChange={(e) => {
                setData({ ...data, city: e.target.value });
              }}
              error={error?.city}
              label="Cite Your Source"
              placeholder="Add source link here"
              required
            />
            <TextAreaInput
              value={data?.insights}
              onChange={(e) => {
                setData({ ...data, insights: e.target.value });
              }}
              label="Researcher Insights"
              placeholder=" eg., the founder’s exact age"
              pluspoint
            />
          </div>
        ) : (
          <></>
        )}
      </main>
    </DraftLayout>
  );
}

export default Chapter3A_WorkType;
