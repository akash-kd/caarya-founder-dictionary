import { useState, useContext, useEffect } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/ViablityRecord";

function Chapter4B_Funding() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);
  const [data, setData] = useState(record?.funding);
  const [error, setError] = useState();

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (data?.funding === undefined || !data?.city || data?.city?.length === 0)
      setDisabled(true);
    else setDisabled(false);
  }, [data]);

  const onFundingSelected = (option, index) => {
    setData({ ...data, funding: index });
  };

  const onNext = () => {
    if (data?.funding === undefined) {
      setError({ ...error, funding: "* select a funding type" });
    } else if (!data?.city || data?.city?.length === 0) {
      setError({ ...error, city: "* enter your source" });
    } else {
      setRecord({ ...record, funding: data });
      setStage((prev) => prev + 1);
    }
  };

  console.log(data);
  return (
    <DraftLayout
      heading="Funding"
      subheading="Identify the funding status of the company"
      info="Information on how this is relevant"
      chapName="Viablity"
      onNext={onNext}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
      bottomDisabled={disabled}
    >
      <main className="my-10 flex flex-col gap-10">
        <OptionsInput
          value={data?.funding}
          options={[
            {
              name: "Bootstrapped / Pre-Seed",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "Seed Funding",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "Series A, B, C",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onFundingSelected}
          error={error?.funding}
        />
        {data?.funding >= 0 ? (
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

export default Chapter4B_Funding;
