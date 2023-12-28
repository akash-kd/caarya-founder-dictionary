import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import FounderRecordContext from "../context/FounderRecord";

function Chapter2AFounder_Top() {
  const [record, setRecord] = useContext(FounderRecordContext);
  const [founder, setFounder] = useState();
  const [stage, setStage] = useContext(StageContext);


  return (
    <DraftLayout
      heading="Who’s at the top?"
      subheading="Identify the founder(s) of this startup"
      info="Information on how this is relevant"
      chapName="Founder"
      onNext={() => {
        setRecord({ ...record, founder });
        setStage((state) => state + 1);
      }}
      onPrevious={() => setStage((state) => state - 1)}
    >
      <TextInput
        value={record?.founder}
        label="Founder Name"
        placeholder="John Doe"
        onChange={(e) => setFounder(e.target.value)}
      />
    </DraftLayout>
  );
}

export default Chapter2AFounder_Top;
