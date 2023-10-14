import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const ReferencesCard = ({ children }) => {
  return (
    <div className="flex lg:p-4 flex-col flex-start gap-10 relative ">
      <BsCheckCircle
        size="32px"
        color="#CFCDC9"
        className="absolute top-2 right-2"
      />
      {children}
    </div>
  );
};

export default ReferencesCard;
