import { createContext, useEffect, useState } from "react";

const ViablityRecordContext = createContext();

export function ViablityRecordProvider({ children }) {
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("viablity-record"))
  );

  useEffect(() => {
    localStorage.setItem("viablity-record", JSON.stringify(record));
  }, [record]);

  return (
    <ViablityRecordContext.Provider value={[record, setRecord]}>
      {children}
    </ViablityRecordContext.Provider>
  );
}

export default ViablityRecordContext;
