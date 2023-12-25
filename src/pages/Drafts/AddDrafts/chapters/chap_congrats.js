import { useContext } from "react";

import BottomNav from "../copmonents/bottom_nav";
import TopNav from "../copmonents/top_nav";
import Status from "../copmonents/status";
import StageContext from "../context/stage";

function Chapter_Congrats() {
  const [stage, setStage] = useContext(StageContext);

  return (
    <div className="sticky-thc flex flex-col bg-white justify-between h-full lg:h-auto">
      <div>
        <TopNav />
        <div className="p-4">
          <Status />
        </div>
      </div>

      {/* Main Body --------- */}
      <main className="flex flex-col justify-center items-center before:bg-blue-300 p-4 w-full h-full overflow-y-scroll">
        <img
          className="h-40 w-40"
          src="/assets/svg/pages/drafts/congrats.svg"
        />
        <h1 className="mt-4 font-satoshi font-medium text-[28px] text-primary-magenta-medium">
          Congratulations!!!
        </h1>
        <h3 className="mt-2 text-center font-lato font-light">
          You earned the badge ‘_____’ for <br />
          completing the story cover!
        </h3>
        <button className="mt-8 font-lato font-semibold text-sm underline text-primary-magenta-medium">
          Make Changes
        </button>
      </main>

      <div className="p-4 ">
        <button
          onClick={() => {
            setStage((prev) => prev + 1);
          }}
          className="w-full h-[60px] text-neutral-50 font-lato font-semibold text-center rounded-[20px] continue-button "
        >
          Next Chapter
        </button>
      </div>
    </div>
  );
}

export default Chapter_Congrats;
