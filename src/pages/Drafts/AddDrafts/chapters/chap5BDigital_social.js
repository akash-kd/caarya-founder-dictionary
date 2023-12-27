import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/DigitalFootprintRecord";
import CheckBoxInput from "../copmonents/checkbox_input";

function Chapter5B_Social() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);

  const [error, setError] = useState();
  const [website, setWebsite] = useState(record?.social);
  const [number, setNumber] = useState(record?.social_number);
  const [opt, setOpt] = useState();

  const onNext = () => {
    if (opt) {
      setStage((prev) => prev + 1);
    } else if (!website || website?.length === 0) {
      setError({ ...error, website: "* select a work type" });
    } else if (!number || number?.length === 0) {
      setError({ ...error, website: "* select a work type" });
    } else {
      setRecord({ ...record, social: website, social_number: number });
      setStage((prev) => prev + 1);
    }
  };

  return (
    <DraftLayout
      heading="Social Presence"
      subheading="Assess the company’s Instagram footprint"
      info="Information on where to find this"
      onNext={onNext}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10 items-center w-full">
        <TextInput
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          error={error?.website}
          label="Instagram Address"
          placeholder="Instagram address here"
        />
        <TextInput
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          error={error?.website}
          label="No. of Followers on Instagram"
          placeholder="100"
        />
        <h3 className="font-lato text-2xl font-light">or</h3>
        <CheckBoxInput
          text="Company is not on Instagram"
          onChange={(e) => {
            console.log(e.target.checked);
            setOpt(e.target.checked);
          }}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter5B_Social;
