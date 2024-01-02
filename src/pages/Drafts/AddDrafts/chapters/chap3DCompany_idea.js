import { useState, useContext } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";
import RecordContext from "../context/CompanyRecord";

function Chapter3D_Idea() {
  const [stage, setStage] = useContext(StageContext);
  const [record, setRecord] = useContext(RecordContext);
  const [idea, setIdea] = useState(record?.vision);

  return (
    <DraftLayout
      heading="The Idea"
      subheading="Give a brief description of what the company does."
      info="Information on where to find this"
      chapName="Company"
      onNext={() => {
        setRecord({ ...record, idea });
        setStage((prev) => prev + 1);
      }}
      onPrevious={() => {
        setStage((prev) => prev - 1);
      }}
    >
      <main className="my-10 flex flex-col gap-10">
        <TextAreaInput
          value={idea}
          label="Idea Description"
          placeholder="Company vision statement comes here"
          onChange={(e) => setIdea(e.target.value)}
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter3D_Idea;
