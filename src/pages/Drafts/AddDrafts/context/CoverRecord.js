import { createContext, useEffect, useState } from "react";

const RecordContext = createContext();

export function RecordProvider({ children }) {
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("cover-record"))
  );

  useEffect(() => {
    localStorage.setItem("cover-record", JSON.stringify(record));
  }, [record]);

  return (
    <RecordContext.Provider value={[record, setRecord]}>
      {children}
    </RecordContext.Provider>
  );
}

export default RecordContext;
