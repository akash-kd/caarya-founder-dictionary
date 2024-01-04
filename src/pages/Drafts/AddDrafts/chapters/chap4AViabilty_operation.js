import { useState, useContext, useEffect} from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/ViablityRecord";

function Chapter4A_Operation() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);
  const [data, setData] = useState(record?.operation);
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    if (
      data?.operation === undefined ||
      !data?.city ||
      data?.city?.length === 0
    )
      setDisabled(true);
    else setDisabled(false);
  }, [data]);

  const onOperationSelected = (option, index) => {
    setData({ ...data, operation: index });
  };

  const onNext = () => {
    if (data?.operation === undefined) {
      setError({ ...error, operation: "* select a operations type" });
    } else if (!data?.city || data?.city?.length === 0) {
      setError({ ...error, city: "* enter your source" });
    } else {
      setRecord({ ...record, operation: data });
      setStage((prev) => prev + 1);
    }
  };

  
  return (
    <DraftLayout
      heading="Years of Operation"
      subheading="Identify the company’s age"
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
          value={data?.operation}
          options={[
            {
              name: "0-5 Years Old",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "6-10 Years Old",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "10+ Years Old",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onOperationSelected}
          error={error?.operation}
        />
        {data?.operation >= 0 ? (
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

export default Chapter4A_Operation;
