import { useState } from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

function Chapter5_Mission() {
  const [workType, setWorkType] = useState();
  const onWorkTypeSelected = (option, index) => {
    setWorkType(option);
  };

  return (
    <DraftLayout
      heading="The Mission"
      subheading="State the company’s Vison Statement"
      info="Information on where to find this"
    >
      <main className="my-10 flex flex-col gap-10">
        <TextAreaInput
          label="Vision Statement"
          placeholder="Company vision statement comes here"
        />
      </main>
    </DraftLayout>
  );
}

export default Chapter5_Mission;
