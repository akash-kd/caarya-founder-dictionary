import React from "react";
import CardTitle from "./CardTitle";
import EmptyState from "components/Comman/EmptyState";

function RecentStories() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <CardTitle heading="Recent Stories" viewAll />
      <EmptyState
        image="/assets/images/empty/stories.svg"
        text="No Stories to Show"
        subText="Startup stories recently modified by you appear here"
        ctaText="Add New Story"
        ctaLink="/home/sus/0"
      />
    </div>
  );
}

export default RecentStories;
