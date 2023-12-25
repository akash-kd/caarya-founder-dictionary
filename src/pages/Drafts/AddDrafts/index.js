import React, { useContext } from "react";

import Chapter_Congrats from "./chapters/chap_congrats";
import Chapter1ACover_Startup from "./chapters/chap1ACover_startup";
import Chapter1BCover_StartupSector from "./chapters/chap1BCover_startupSector";
import Chapter2A_StartupFounder from "./chapters/chap2AFounder_founders";
import Chapter4_WorkType from "./chapters/chap3ACompany_workType";
import Chapter5_Mission from "./chapters/chap3BComapny_mission";
import Chapter_Congrats from "./chapters/chap_congrats";

import StageContext, { StageProvider } from "./context/stage";

const Chapters = () => {
  const [stage, setStage] = useContext(StageContext);
  console.log(stage);
  if (stage === 0) return <Chapter1ACover_Startup />;
  if (stage === 1) return <Chapter1BCover_StartupSector />;
  // if (stage === 2) return <Chapter2A_StartupFounder />;

  // return <Chapter_Congrats />
};

const AddDrafts = () => {
  return (
    <StageProvider>
      <Chapters />
    </StageProvider>
  );
};

export default AddDrafts;
