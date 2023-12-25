import { useState, useContext} from "react";

import OptionsInput from "../copmonents/option_input";
import TextInput from "../copmonents/text_input";
import DraftLayout from "../layout/draftLayout";
import TextAreaInput from "../copmonents/textarea_input";

import StageContext from "../context/stage";

function Chapter4_WorkType() {
  const [workType, setWorkType] = useState();
  const onWorkTypeSelected = (option, index) => {
    setWorkType(option);
  };

  const value = useContext(StageContext);
  console.log(value)


  return (
    <DraftLayout
      heading="Where Work Happens"
      subheading="Identify the company’s work location"
      info="Information on how this is relevant"
    >
      <main className="my-10 flex flex-col gap-10">
        <OptionsInput
          options={[
            {
              name: "Remote Work",
              img: "/assets/svg/pages/drafts/icons/remote.svg",
            },
            {
              name: "Hybrid Work",
              img: "/assets/svg/pages/drafts/icons/hybrid.svg",
            },
            {
              name: "On-Site Work",
              img: "/assets/svg/pages/drafts/icons/onsite.svg",
            },
          ]}
          onChange={onWorkTypeSelected}
        />
        {workType?.name ? (
          <div className="flex flex-col gap-10">
            <TextInput
              label="Cite Your Source"
              placeholder="Add source link here"
              required
            />
            <TextAreaInput
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

export default Chapter4_WorkType;
