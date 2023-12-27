import { createContext, useEffect, useState } from "react";

const DigitalRecordContext = createContext();

export function DigitalRecordProvider({ children }) {
  const [record, setRecord] = useState({});

  useEffect(() => {
    localStorage.setItem("digital-record", JSON.stringify(record));
  }, [record]);

  return (
    <DigitalRecordContext.Provider value={[record, setRecord]}>
      {children}
    </DigitalRecordContext.Provider>
  );
}

export default DigitalRecordContext;
