import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/ViablityRecord";

function Chapter4D_Rev() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);
  const [data, setData] = useState(record?.rev);
  const [error, setError] = useState();

  const onRevSelected = (option, index) => {
    setData({ ...data, rev: index });
  };

  const onNext = () => {
    if (data?.rev === undefined) {
      setError({ ...error, rev: "* select a revenue type" });
    } else if (!data?.city || data?.city?.length === 0) {
      setError({ ...error, city: "* enter your source" });
    } else {
      setRecord({ ...record, rev: data });
      setStage((prev) => prev + 1);
    }
  };

  return (
    <DraftLayout
      heading="Revenue"
      subheading="Discover the total revenue of the company till date"
      info="Information on how this is relevant"
      chapName="Viablity"
      onNext={onNext}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <OptionsInput
          value={data?.rev}
          options={[
            {
              name: "₹ 0-5 Cr.",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "₹ 6-10 Cr.",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "+ ₹ 10 Cr.",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onRevSelected}
          error={error?.rev}
        />
        {data?.rev >= 0 ? (
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

export default Chapter4D_Rev;
