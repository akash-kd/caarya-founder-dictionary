import BottomNav from "../copmonents/bottom_nav";
import TopNav from "../copmonents/top_nav";
import Status from "../copmonents/status";

import Covers from "../../../../helpers/constants/drafts";

function Chapter_Congrats() {
  console.log(Covers);
  return (
    <div className="sticky-thc flex flex-col bg-white justify-between h-full lg:h-auto">
      <TopNav />

      {/* Main Body --------- */}
      <main className="flex flex-col gap-4 before:bg-blue-300 p-4 w-full h-full overflow-y-scroll">
        <Status />
        Congrats page
      </main>

      <div className="px-4">
        <BottomNav />
      </div>
    </div>
  );
}

export default Chapter_Congrats;
