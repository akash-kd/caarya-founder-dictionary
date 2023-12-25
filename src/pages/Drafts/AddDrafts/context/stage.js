import { createContext, useState } from "react";

const StageContext = createContext();

export function StageProvider({ children }) {
  const [stage, setStage] = useState(1);
  return (
    <StageContext.Provider value={[stage, setStage]}>
      {children}
    </StageContext.Provider>
  );
}

export default StageContext;
