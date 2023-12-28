import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/CompanyRecord";

function Chapter3A_Mission() {
  const [stage, setStage] = useContext(StageContext);
  const [record, setRecord] = useContext(RecordContext);
  const [mission, setMission] = useState(record?.mission);

  return (
    <DraftLayout
      heading="The Mission"
      subheading="State the company’s Mission Statement"
      info="Information on where to find this"
      chapName="Company"
      onNext={() => {
        setRecord({ ...record, mission });
        setStage((prev) => prev + 1);
      }}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <TextAreaInput
          value={mission}
          label="Mission Statement"
          placeholder="Company mission statement comes here"
          onChange={(e) => setMission(e.target.value)}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter3A_Mission;
