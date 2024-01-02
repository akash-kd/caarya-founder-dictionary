import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/ViablityRecord";

function Chapter4C_Emp() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);
  const [data, setData] = useState(record?.emp);
  const [error, setError] = useState();

  const onEmpSelected = (option, index) => {
    setData({ ...data, emp: index });
  };

  const onNext = () => {
    if (data?.emp === undefined) {
      setError({ ...error, emp: "* select a employee type" });
    } else if (!data?.city || data?.city?.length === 0) {
      setError({ ...error, city: "* enter your source" });
    } else {
      setRecord({ ...record, emp: data });
      setStage((prev) => prev + 1);
    }
  };

  console.log(data);
  return (
    <DraftLayout
      heading="Employees"
      subheading="Identify the no. of people employed by the company"
      info="Information on how this is relevant"
      chapName="Viablity"
      onNext={onNext}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <OptionsInput
          value={data?.emp}
          options={[
            {
              name: "1-10 Employees",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "11-30 Employees",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "30+ Employees",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onEmpSelected}
          error={error?.emp}
        />
        {data?.emp >= 0 ? (
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

export default Chapter4C_Emp;
