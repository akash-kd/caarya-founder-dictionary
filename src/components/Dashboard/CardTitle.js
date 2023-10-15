import React from "react";
import { useHistory } from "react-router-dom";

function CardTitle({ heading, viewAll, viewAllLink }) {
  const history = useHistory();
  return (
    <div className="w-full flex flex-row items-center justify-between space-x-4 text-primary-magenta-dark font-poppins font-medium text-base leading-6">
      <p>{heading}</p>
      {viewAll && (
        <p
          onClick={() => {
            viewAllLink && history.push(viewAllLink);
          }}
          className="text-sm font-bold leading-5 underline underline-offset-2"
        >
          View All
        </p>
      )}
    </div>
  );
}

export default CardTitle;
