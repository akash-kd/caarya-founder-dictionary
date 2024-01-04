import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Chapter_Congrats from "./chapters/chap_congrats";

import Chapter1ACover_Startup from "./chapters/chap1ACover_startup";
import Chapter1BCover_StartupSector from "./chapters/chap1BCover_startupSector";

import Chapter2A_StartupFounder from "./chapters/chap2AFounder_founders";

import Chapter3A_WorkType from "./chapters/chap3ACompany_workType";
import Chapter3B_Mission from "./chapters/chap3BCompany_mission";
import Chapter3C_Vision from "./chapters/chap3CCompany_vision";
import Chapter3D_Idea from "./chapters/chap3DCompany_idea";

import Chapter4A_Operation from "./chapters/chap4AViabilty_operation";
import Chapter4B_Funding from "./chapters/chap4BViabilty_funding";
import Chapter4C_Emp from "./chapters/chap4CViabilty_emp";
import Chapter4D_Rev from "./chapters/chap4DViabilty_rev";

import Chapter5A_Website from "./chapters/chap5ADigital_website";
import Chapter5B_Social from "./chapters/chap5BDigital_social";
import Chapter5C_Linkedin from "./chapters/chap5CDigital_linkedin";

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
import DigitalFootprint from "components/SusForm/DigitalFootprint";
import { DigitalRecordProvider } from "./context/DigitalFootprintRecord";

const Chapters = () => {
  const [stage, setStage] = useContext(StageContext);
  const { chap } = useParams();
  useEffect(() => {
    if (chap === "1") setStage(0);
    else if (chap === "2") setStage(3);
    else if (chap === "3") setStage(5);
    else if (chap === "4") setStage(10);
    else if (chap === "5") setStage(15);
  }, []);

  // Chapter 1 ---
  if (stage === 0) return <Chapter1ACover_Startup />;
  if (stage === 1) return <Chapter1BCover_StartupSector />;
  if (stage === 2)
    return <Chapter_Congrats onMakeChangeClick={() => setStage(0)} />;

  // Chapter 2
  if (stage === 3) return <Chapter2A_StartupFounder />;
  if (stage === 4)
    return <Chapter_Congrats onMakeChangeClick={() => setStage(3)} />;

  // Chapter 3 -----
  if (stage === 5) return <Chapter3D_Idea />;
  if (stage === 6) return <Chapter3A_WorkType />;
  if (stage === 7) return <Chapter3B_Mission />;
  if (stage === 8) return <Chapter3C_Vision />;
  if (stage === 9)
    return <Chapter_Congrats onMakeChangeClick={() => setStage(5)} />;
  // Chater 4 ------
  if (stage === 10) return <Chapter4A_Operation />;
  if (stage === 11) return <Chapter4B_Funding />;
  if (stage === 12) return <Chapter4C_Emp />;
  if (stage === 13) return <Chapter4D_Rev />;
  if (stage === 14)
    return <Chapter_Congrats onMakeChangeClick={() => setStage(10)} />;

  // Chapter 5 -----
  if (stage === 15) return <Chapter5A_Website />;
  if (stage === 16) return <Chapter5B_Social />;
  if (stage === 17) return <Chapter5C_Linkedin />;

  return <Chapter_Congrats onMakeChangeClick={() => setStage(15)} />;
};

const AddDrafts = () => {
  return (
    <StageProvider>
      <RecordProvider>
        <FounderRecordProvider>
          <CompanyRecordProvider>
            <ViablityRecordProvider>
              <DigitalRecordProvider>
                <Chapters />
              </DigitalRecordProvider>
            </ViablityRecordProvider>
          </CompanyRecordProvider>
        </FounderRecordProvider>
      </RecordProvider>
    </StageProvider>
  );
};

export default AddDrafts;
