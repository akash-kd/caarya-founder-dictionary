import { useEffect, useState } from "react";
import { Flow1 } from "./Flow/flow1";
import { FlowLR } from "./Flow/flowLR";
import { FlowRL } from "./Flow/flowRL";
import Chap1 from "./Rings/chap1";
import Chap2 from "./Rings/chap2";
import Chap3 from "./Rings/chap3";
import Chap4 from "./Rings/chap4";
import Chap5 from "./Rings/chap5";

function TopBar() {
  return (
    <div className="justify-between items-center shadow-md bg-white flex w-full gap-5 pl-4 py-4">
      <img
        loading="lazy"
        src="/assets/svg/pages/drafts/icons/back.svg"
        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
      />
      <div className="self-stretch flex items-center justify-between gap-0">
        <div className="items-stretch flex gap-4 my-auto">
          <img
            loading="lazy"
            src="/assets/svg/pages/drafts/icons/add_logo.svg"
            className="aspect-square object-contain object-center w-10"
          />
          <div className="justify-center items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="font-lato text-black text-base font-semibold leading-6 tracking-wider whitespace-nowrap">
              Love Clip
            </div>
            <div className="font-lato text-stone-500 text-xs font-light leading-4 tracking-wide whitespace-nowrap">
              Industry Name
            </div>
          </div>
          <img
            loading="lazy"
            src="/assets/svg/pages/drafts/icons/edit.svg"
            className="aspect-square w-4 self-start"
          />
        </div>
      </div>
      <div className="justify-center items-center flex flex-col pr-4 py-px rounded-[192px]">
        <img
          loading="lazy"
          src="/assets/svg/pages/drafts/diamond.png"
          className="aspect-square object-contain object-center w-6 overflow-hidden"
        />
        <div className="font-lato text-neutral-500 text-center text-xs font-semibold leading-5 tracking-wide self-stretch whitespace-nowrap mt-1">
          1/5
        </div>
      </div>
    </div>
  );
}

function ChapterFlow() {
  const [chap2Lock, setChap2Lock] = useState(true);
  const [chap3Lock, setChap3Lock] = useState(true);
  const [chap4Lock, setChap4Lock] = useState(true);
  const [chap5Lock, setChap5Lock] = useState(true);

  useEffect(() => {
    const chap1 = JSON.parse(localStorage.getItem("cover-record"));
    const chap2 = JSON.parse(localStorage.getItem("founder-record"));
    const chap3 = JSON.parse(localStorage.getItem("company-record"));
    const chap4 = JSON.parse(localStorage.getItem("viablity-record"));
    const chap5 = JSON.parse(localStorage.getItem("digital-footprint-record"));

    if (chap1?.sector && chap1?.sector >= 0) setChap2Lock(false);
    if (chap2?.founder) setChap3Lock(false);
    if (chap3?.vision) setChap4Lock(false);
    if (chap4?.rev?.city) setChap5Lock(false);
  });

  return (
    <div className="sticky-thc h-[85vh] lg:h-auto bg-white overflow-y-scroll">
      <TopBar />
      <div className="py-8 pb-20 flex flex-col gap-2">
        <Chap1 />
        <Flow1 />
        <Chap2 lock={chap2Lock} />
        <FlowLR />
        <Chap3 lock={chap3Lock} />
        <FlowRL />
        <Chap4 lock={chap4Lock} />
        <FlowLR />
        <Chap5 lock={chap5Lock} />
      </div>
    </div>
  );
}

export default ChapterFlow;
