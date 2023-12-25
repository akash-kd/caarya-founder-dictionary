import { createContext, useState } from "react";

const RecordContext = createContext();

export function RecordProvider({ children }) {
  const [record, setRecord] = useState({});
  return (
    <RecordContext.Provider value={[record, setRecord]}>
      {children}
    </RecordContext.Provider>
  );
}

export default RecordContext;
