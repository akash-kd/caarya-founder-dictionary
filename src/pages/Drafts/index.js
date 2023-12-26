import React, { useEffect, useState } from "react";
import covers from "helpers/constants/drafts";

function Card({ record }) {
  return (
    <div className="w-full rounded-2xl p-4 gap-4 bg-white shadow-md">
      <div className="flex gap-4">
        <img
          className="w-16 h-16"
          src="/assets/svg/pages/drafts/icons/add_logo.svg"
        />
        <div className="flex flex-col justify-start">
          <h1 className="mb-2 font-lato font-semibold text-xl text-neutral-800">
            {record?.name}
          </h1>
          <h1 className="font-lato font-light text-sm">
            {covers[record?.sector]?.name}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-[16px] relative">
        <div className="flex items-start flex-1 grow justify-center relative">
          <div className="flex items-center flex-1 grow justify-center relative">
            <div className="bg-primary-magenta-medium rounded-[8px_0px_0px_8px] relative flex-1 grow h-[2px]" />
            <div className="bg-primary-magenta-medium relative w-[8px] h-[8px] rounded-[4px]" />
            <div className="bg-primary-magenta-medium relative flex-1 grow h-[2px]" />
          </div>
          <div className="flex items-center flex-1 grow justify-center relative">
            <div className="bg-primary-magenta-medium relative flex-1 grow h-[2px]" />
            <div className="border border-solid border-primary-magenta-medium relative w-[8px] h-[8px] rounded-[4px]" />
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
          </div>
          <div className="flex items-center flex-1 grow justify-center relative">
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
            <div className="relative w-[8px] h-[8px] bg-neutral-200 rounded-[4px]" />
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
          </div>
          <div className="flex items-center flex-1 grow justify-center relative">
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
            <div className="relative w-[8px] h-[8px] bg-neutral-200 rounded-[4px]" />
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
          </div>
          <div className="flex items-center flex-1 grow justify-center relative">
            <div className="relative flex-1 grow h-[2px] bg-neutral-200" />
            <div className="relative w-[8px] h-[8px] bg-neutral-200 rounded-[4px]" />
            <div className="bg-neutral-200 rounded-[0px_8px_8px_0px] relative flex-1 grow h-[2px]" />
          </div>
        </div>
        <div className="inline-flex flex-col items-center p-[8px] flex-[0_0_auto] rounded-[192px] justify-center relative">
          <div className="relative w-[18px] h-[18px]">
            <img
              className="absolute w-[18px] h-[17px] top-px left-0"
              src="/assets/svg/pages/drafts/diamond.png"
            />
          </div>
          <div className="relative w-fit font-lato font-semibold text-neutral-500 text-[12px] text-center tracking-[0.60px] leading-[18px] whitespace-nowrap">
            1/5
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between relative">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit font-lato font-light text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Created
          </div>
          <div className="font-bold text-3xl text-neutral-500 relative top-[-2px] py-[2px] px-[2px]">
            ·
          </div>
          <div className="relative w-fit font-lato font-semibold text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Oct 12, 2023
          </div>
        </div>
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit font-lato font-light text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            Last Edited
          </div>
          <div className="font-bold text-3xl text-neutral-500 relative top-[-2px] py-[2px] px-[2px]">
            ·
          </div>
          <div className="relative w-fit mt-[-1.00px] font-lato font-semibold text-neutral-500 text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap">
            8h Ago
          </div>
        </div>
      </div>
    </div>
  );
}

const Drafts = () => {
  const [record, setRecord] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("record"));
    console.log("Record Stored Data", data);

    console.log(covers[data.sector]);
    setRecord(data);
  }, []);

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
        <div className="p-4 flex flex-col w-full h-full">
          {/* ------ Title ----- */}
          <div className="flex mb-10 w-full h-min justify-between items-center gap-8">
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
          <div className="flex flex-col h-full w-full">
            {/* All Record Come Here */}
            <Card record={record} />
            <Frame />
          </div>
        </div>
      </div>
    </>
  );
};

// Export const Frame = () => {
//   Return (
//     <div className="flex flex-col h-[100px] items-start px-[60px] py-0 relative">
//       <div className="flex items-start relative flex-1 self-stretch w-full grow">
//         <div className="ml-[-4.00px] rounded-[0px_0px_16px_0px] border-r-8 [border-right-style:solid] border-b-8 [border-bottom-style:solid] opacity-0 relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] border-neutral-100" />
//         <div className="rounded-[0px_0px_0px_16px] border-b-8 [border-bottom-style:solid] border-l-8 [border-left-style:solid] opacity-0 relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] border-neutral-100" />
//         <div className="rounded-[0px_0px_0px_16px] border-b-8 [border-bottom-style:solid] border-l-8 [border-left-style:solid] relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] border-neutral-100" />
//         <div className="mr-[-4.00px] rounded-[0px_0px_0px_16px] border-b-8 [border-bottom-style:solid] border-l-8 [border-left-style:solid] opacity-0 relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] border-neutral-100" />
//       </div>
//       <div className="flex items-start relative flex-1 self-stretch w-full grow">
//         <div className="relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] rounded-[16px_0px_0px_0px] border-t-8 [border-top-style:solid] border-l-8 [border-left-style:solid] border-neutral-100 opacity-0" />
//         <div className="relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] rounded-[16px_0px_0px_0px] border-t-8 [border-top-style:solid] border-l-8 [border-left-style:solid] border-neutral-100 opacity-0" />
//         <div className="relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] rounded-[0px_16px_0px_0px] border-t-8 [border-top-style:solid] border-r-8 [border-right-style:solid] border-neutral-100 opacity-0" />
//         <div className="mr-[-4.00px] rounded-[0px_16px_0px_0px] border-t-8 [border-top-style:solid] border-r-8 [border-right-style:solid] relative flex-1 self-stretch grow mt-[-4.00px] mb-[-4.00px] border-neutral-100" />
//       </div>
//     </div>
//   );
// };

export function Frame() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2">
      <div>
        <svg
          width="114"
          height="114"
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="21" y="21" width="72" height="72" rx="36" fill="#FDF2FF" />
          <rect
            x="21"
            y="21"
            width="72"
            height="72"
            rx="36"
            fill="url(#paint0_linear_56_108)"
          />
          <circle cx="57" cy="57" r="50" stroke="#FDF2FF" strokeWidth="13" />
          <path
            d="M92.3555 21.6448C101.475 30.7648 106.718 43.0561 106.989 55.9507C107.26 68.8454 102.537 81.3459 93.8082 90.8405C85.079 100.335 73.0186 106.089 60.1467 106.901C47.2747 107.713 34.587 103.519 24.7344 95.196C14.8818 86.873 8.62643 75.0648 7.27527 62.2382C5.92412 49.4117 9.58168 36.5592 17.4838 26.3659C25.3859 16.1727 36.9213 9.42724 49.6798 7.53895C62.4383 5.65067 75.433 8.7656 85.949 16.233"
            stroke="url(#paint1_linear_56_108)"
            strokeWidth="13"
          />
          <defs>
            <linearGradient
              id="paint0_linear_56_108"
              x1="21"
              y1="21"
              x2="100.641"
              y2="83.2189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A193F2" />
              <stop offset="1" stopColor="#C44EB9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_56_108"
              x1="7"
              y1="7"
              x2="117.613"
              y2="93.4153"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A193F2" />
              <stop offset="1" stopColor="#C44EB9" />
            </linearGradient>
          </defs>
        </svg>

        <img
          src="/assets/svg/pages/drafts/chap/chapt1.svg"
          className="absolute top-[-52%] left-[33%]"
        />
      </div>
      <div>
        <h1 className="font-lato text-xl font-semibold ">Cover</h1>
        <h3>(50 %)</h3>
      </div>
    </div>
  );
}

export default Drafts;
