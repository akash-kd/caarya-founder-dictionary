import { useState, useContext, useEffect } from "react";

import Covers from "../../../../helpers/constants/drafts";
import DraftLayout from "../layout/draftLayout";
import StageContext from "../context/stage";
import RecordContext from "../context/CoverRecord";

function Chapter1BCover_StartupSector() {
  const [record, setRecord] = useContext(RecordContext);
  const [error, setError] = useState();
  const [stage, setStage] = useContext(StageContext);
  const [selected, setSelected] = useState(record?.sector);

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (!selected) setDisabled(true);
    else setDisabled(false);
  }, [selected]);
  return (
    <DraftLayout
      heading="Some Title Here"
      subheading="Identify the industry your startup operates in"
      info="Some tip on how to identify startup industry"
      onNext={() => {
        if (selected >= 0) {
          setRecord({
            ...record,
            sector: selected,
          });
          setStage((stage) => stage + 1);
        } else setError("* select a sector");
      }}
      onPrevious={() => {
        setStage((stage) => stage - 1);
      }}
      bottomDisabled={disabled}
    >
      <div>
        <p className="text-red-500 font-lato font-semibold text-xs my-2">
          {error}
        </p>
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
                  className={`font-lato font-semibold text-sm leading-[150%] tracking-[0.7px] text-center ${
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
      </div>
    </DraftLayout>
  );
}

export default Chapter1BCover_StartupSector;
