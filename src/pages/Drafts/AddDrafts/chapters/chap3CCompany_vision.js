import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/CompanyRecord";

function Chapter3C_Vision() {
  const [stage, setStage] = useContext(StageContext);
  const [record, setRecord] = useContext(RecordContext);
  const [vision, setVision] = useState(record?.vision);

  return (
    <DraftLayout
      heading="The Vision"
      subheading="State the company’s Vison Statement"
      info="Information on where to find this"
      onNext={() => {
        setRecord({ ...record, vision });
        setStage((prev) => prev + 1);
      }}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <TextAreaInput
          value={vision}
          label="Vision Statement"
          placeholder="Company vision statement comes here"
          onChange={(e) => setVision(e.target.value)}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter3C_Vision;
