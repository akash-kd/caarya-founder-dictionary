import React, { useContext } from "react";

import Chapter_Congrats from "./chapters/chap_congrats";

import Chapter1ACover_Startup from "./chapters/chap1ACover_startup";
import Chapter1BCover_StartupSector from "./chapters/chap1BCover_startupSector";

import Chapter2A_StartupFounder from "./chapters/chap2AFounder_founders";

import Chapter3A_WorkType from "./chapters/chap3ACompany_workType";
import Chapter3B_Mission from "./chapters/chap3BCompany_mission";
import Chapter3C_Vision from "./chapters/chap3CCompany_vision";
import Chapter3D_Idea from "./chapters/chap3DCompany_idea";

import StageContext, { StageProvider } from "./context/stage";
import RecordContext, { RecordProvider } from "./context/CoverRecord";

import FounderRecordContext, {
  FounderRecordProvider,
} from "./context/FounderRecord";
import CompanyRecordContext, {
  CompanyRecordProvider,
} from "./context/CompanyRecord";
import ViablityRecordContext, {
  ViablityRecordProvider,
} from "./context/ViablityRecord";
import Chapter4A_Operation from "./chapters/chap4AViabilty_operation";

const Chapters = () => {
  const [stage, setStage] = useContext(StageContext);
  const [record, setRecord] = useContext(RecordContext);
  console.log("Record:", record);
  console.log("Stage:", stage);
  if (stage === 0) return <Chapter1ACover_Startup />;
  if (stage === 1) return <Chapter1BCover_StartupSector />;
  if (stage === 2) return <Chapter_Congrats />;
  if (stage === 3) return <Chapter2A_StartupFounder />;
  if (stage === 4) return <Chapter_Congrats />;
  if (stage === 5) return <Chapter3D_Idea />;
  if (stage === 6) return <Chapter3A_WorkType />;
  if (stage === 7) return <Chapter3B_Mission />;
  if (stage === 8) return <Chapter3C_Vision />;
  if (stage === 9) return <Chapter_Congrats />;
  if (stage === 10) return <Chapter4A_Operation />;


  
  return <Chapter_Congrats />;
};

const AddDrafts = () => {
  return (
    <StageProvider>
      <RecordProvider>
        <FounderRecordProvider>
          <CompanyRecordProvider>
            <ViablityRecordProvider>
              <Chapters />
            </ViablityRecordProvider>
          </CompanyRecordProvider>
        </FounderRecordProvider>
      </RecordProvider>
    </StageProvider>
  );
};

export default AddDrafts;
