import React, { useContext } from "react";

import Chapter_Congrats from "./chapters/chap_congrats";
import Chapter1ACover_Startup from "./chapters/chap1ACover_startup";
import Chapter1BCover_StartupSector from "./chapters/chap1BCover_startupSector";
import Chapter2A_StartupFounder from "./chapters/chap2AFounder_founders";
import Chapter3A_WorkType from "./chapters/chap3ACompany_workType";
import Chapter3B_Mission from "./chapters/chap3BComapny_mission";
import Chapter3C_Vision from "./chapters/chap3CComapny_vision";


import StageContext, { StageProvider } from "./context/stage";
import RecordContext, { RecordProvider } from "./context/record";

const Chapters = () => {
  const [stage, setStage] = useContext(StageContext);
  const [record, setRecord] = useContext(RecordContext);
  console.log("Record:", record);
  console.log("Stage:", stage);
  if (stage === 0) return <Chapter1ACover_Startup />;
  if (stage === 1) return <Chapter1BCover_StartupSector />;
  if (stage === 2) return <Chapter_Congrats />;
  if (stage === 3) return <Chapter2A_StartupFounder />;
  if (stage === 4) return <Chapter3A_WorkType />;
  if (stage === 5) return <Chapter3B_Mission />;
  if (stage === 6) return <Chapter3C_Vision />;

  return <Chapter_Congrats />;
};

const AddDrafts = () => {
  return (
    <RecordProvider>
      <StageProvider>
        <Chapters />
      </StageProvider>
    </RecordProvider>
  );
};

export default AddDrafts;
