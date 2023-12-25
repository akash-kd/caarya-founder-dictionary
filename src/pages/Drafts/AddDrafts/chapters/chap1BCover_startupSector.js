import { useState, useContext } from "react";

import Covers from "../../../../helpers/constants/drafts";
import DraftLayout from "../layout/draftLayout";
import StageContext from "../context/stage";

function Chapter1BCover_StartupSector() {
  const [selected, setSelected] = useState();
  const [stage, setStage] = useContext(StageContext);
  return (
    <DraftLayout
      heading="Some Title Here"
      subheading="Identify the industry your startup operates in"
      info="Some tip on how to identify startup industry"
      onNext={() => {
        setStage((stage) => stage + 1);
      }}
    >
      <main className="grid grid-cols-2 h-full w-full mt-8 gap-4">
        {Covers.map((cover, index) => {
          return (
            <div
              onClick={() => {
                console.log(index);
                setSelected(index);
              }}
              key={index}
              style={{ height: "120px" }}
              className={`${
                selected === index
                  ? "border-2 border-primary-magenta-medium rounded-2xl shadow-md"
                  : ""
              } flex flex-col gap-4 justify-center items-center w-full min-h-30 h-30`}
            >
              <img
                src={cover.img}
                className="h-12 w-12 stroke-primary-magenta-medium"
              />
              <p
                className={`font-lato font-semibold text-sm ${
                  selected === index
                    ? "text-primary-magenta-medium"
                    : "text-neutral-500"
                }`}
              >
                {cover.name}
              </p>
            </div>
          );
        })}
      </main>
    </DraftLayout>
  );
}

export default Chapter1BCover_StartupSector;
