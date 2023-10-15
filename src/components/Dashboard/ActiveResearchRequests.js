import React from "react";
import CardTitle from "./CardTitle";
import EmptyState from "components/Comman/EmptyState";

function ActiveResearchRequests() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <CardTitle heading="Active Research Requests" viewAll />
      <EmptyState
        image="/assets/images/empty/request.svg"
        text="No Requests Picked Up"
        subText="Research requests you pick up appear here"
        ctaText="Explore Research Requests"
      />
    </div>
  );
}

export default ActiveResearchRequests;
