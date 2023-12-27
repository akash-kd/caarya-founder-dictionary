// Flow from Left to Right

export const FlowLR = ({ padding }) => {
  return (
    <div
      className={`grid grid-cols-4 grid-rows-2 h-[100px] items-start ${
        padding ? "pl-[55px] pr-[70px]" : "px-[70px]"
      } py-0 relative`}
    >
      <div className="flex flex-1 w-full h-full mt-[4px]"></div>
      <div className="flex flex-1 w-full h-full border-b-8 border-red-800 mt-[4px]"></div>
      <div className="flex flex-1 w-full h-full border-b-8 border-red-800 mt-[4px]"></div>
      <div className="rounded-br-2xl flex flex-1 w-full h-full border-r-8 border-b-8 border-red-800 mt-[4px]"></div>

      <div className="rounded-tl-2xl flex flex-1 w-full h-full border-l-8 border-t-8 border-red-800 relative mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
    </div>
  );
};
