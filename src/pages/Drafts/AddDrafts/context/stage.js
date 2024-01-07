import { createContext, useEffect, useState, useRef } from "react";
import { usePrevious } from "hooks/usePrevious";
import { createEntity, updateEntity } from "config/APIs/startup";

const StageContext = createContext();

export function StageProvider({ children }) {
  const [stage, setStage] = useState(0);
  const [draftId, setDraftId] = useState();
  // const prevStage = usePrevious(stage);

  // useEffect(() => {
  //   if (stage === 2) {
  //     // Congrats page
  //     console.log("Dont post anything.");
  //   } else if (prevStage < stage) {
  //     const chap1Data = JSON.parse(localStorage.getItem("cover-record"));

  //     let draftid;

  //     try {
  //       draftid = JSON.parse(localStorage.getItem("draft-id"));
  //       console.log("Draft ID", draftid);
  //     } catch (err) {
  //       draftid = undefined;
  //     }

  //     const postDraft = async () => {
  //       const data = await createEntity({
  //         name: chap1Data.name,
  //         image: chap1Data.img,
  //       });
  //       localStorage.setItem("draft-id", data.data.id);
  //     };

  //     if (stage === 1) postDraft();
  //     else {
  //       updateEntity();
  //     }
  //   }
  // }, [stage]);

  return (
    <StageContext.Provider value={[stage, setStage, draftId, setDraftId]}>
      {children}
    </StageContext.Provider>
  );
}

export default StageContext;
