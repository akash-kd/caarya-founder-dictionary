import React from "react";

const Drafts = () => {
  return (
    <>
      <div className="sticky-thc h-[85vh] lg:h-auto">


        {/* ----- BreadCrumbs  ---- */}
        <p className="px-4 py-2 fonts-inter text-[10px] flex gap-1">
          <span>{">"}</span>
          <span>{"Release"}</span>
          <span className="font-semibold">{">"}</span>
          <span className="font-semibold">{"Products"}</span>
        </p>

        {/* ------ Main Content----- */}
        <div className="p-4 flex w-full h-full">


          {/* ------ Title ----- */}
          <div className="flex w-full h-min justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-satoshi font-bold text-[28px] text-primary-magenta-medium">
                Story Drafts
              </h1>
              <h3 className="font-lato font-light text-sm text-neutral-800 tracking-[0.7px]">
                Page description here
              </h3>
            </div>
            <div></div>
            <img
              className="h-14 w-14"
              src="/assets/svg/pages/drafts/drafts_logo.svg"
            />
          </div>




          {/*------- Main body ------- */}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Drafts;
