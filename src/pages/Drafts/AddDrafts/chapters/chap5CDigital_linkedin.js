import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/DigitalFootprintRecord";
import CheckBoxInput from "../copmonents/checkbox_input";

function Chapter5C_Linkedin() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);

  const [error, setError] = useState();
  const [website, setWebsite] = useState(record?.linkedin);
  const [number, setNumber] = useState(record?.linkedin_number);
  const [opt, setOpt] = useState();

  const onNext = () => {
    if (opt) {
      setStage((prev) => prev + 1);
    } else if (!website || website?.length === 0) {
      setError({ ...error, website: "* select a work type" });
    } else if (!number || number?.length === 0) {
      setError({ ...error, number: "* select a work type" });
    } else {
      setRecord({ ...record, linkedin: website, linkedin_number: number });
      setStage((prev) => prev + 1);
    }
  };

  return (
    <DraftLayout
      heading="Professional Network Presence"
      subheading="Assess the company’s LinkedIn footprint"
      info="Information on where to find this"
      chapName="Digital Footprint"
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
          label="LinkedIn Address"
          placeholder="LinkedIn address here"
        />
        <TextInput
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          error={error?.number}
          label="No. of Followers on LinkedIn"
          placeholder="100"
        />
        <h3 className="font-lato text-2xl font-light">or</h3>
        <CheckBoxInput
          text="Company is not on LinkedIn"
          onChange={(e) => {
            console.log(e.target.checked);
            setOpt(e.target.checked);
          }}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter5C_Linkedin;
