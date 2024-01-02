import { createContext, useEffect, useState } from "react";

const CompanyRecordContext = createContext();

export function CompanyRecordProvider({ children }) {
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("company-record"))
  );

  useEffect(() => {
    localStorage.setItem("company-record", JSON.stringify(record));
  }, [record]);

  return (
    <CompanyRecordContext.Provider value={[record, setRecord]}>
      {children}
    </CompanyRecordContext.Provider>
  );
}

export default CompanyRecordContext;
