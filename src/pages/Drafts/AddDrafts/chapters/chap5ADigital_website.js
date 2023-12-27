import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/DigitalFootprintRecord";
import CheckBoxInput from "../copmonents/checkbox_input";

function Chapter5A_Website() {
  const [record, setRecord] = useContext(RecordContext);
  const [stage, setStage] = useContext(StageContext);

  const [error, setError] = useState();
  const [website, setWebsite] = useState(record?.website);
  const [opt, setOpt] = useState();

  const onNext = () => {
    if (opt) {
      setStage((prev) => prev + 1);
    } else if (!website || website?.length === 0) {
      setError({ ...error, website: "* select a work type" });
    } else {
      setRecord({ ...record, website });
      setStage((prev) => prev + 1);
    }
  };

  return (
    <DraftLayout
      heading="Web Representation"
      subheading="Discover the company’s website"
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
          label="Website Link"
          placeholder="paste website link here"
        />
        <h3 className="font-lato text-2xl font-light">or</h3>
        <CheckBoxInput
          text="Company does not have a website"
          onChange={(e) => {
            console.log(e.target.checked);
            setOpt(e.target.checked);
          }}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter5A_Website;
