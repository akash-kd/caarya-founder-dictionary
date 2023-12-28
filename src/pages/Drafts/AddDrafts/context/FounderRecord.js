import { createContext, useEffect, useState } from "react";

const FounderRecordContext = createContext();

export function FounderRecordProvider({ children }) {
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("founder-record"))
  );

  useEffect(() => {
    localStorage.setItem("founder-record", JSON.stringify(record));
  }, [record]);

  return (
    <FounderRecordContext.Provider value={[record, setRecord]}>
      {children}
    </FounderRecordContext.Provider>
  );
}

export default FounderRecordContext;
