// Flow from Left to Right

export const FlowRL = ({ padding }) => {
  return (
    <div
      className={`grid grid-cols-4 grid-rows-2 h-[100px] items-start ${
        padding ? "pl-[55px] pr-[70px]" : "px-[70px]"
      } py-0 relative`}
    >
      <div className="flex flex-1 w-full h-full mt-[4px] border-l-8 border-b-8 border-neutral-100 rounded-bl-2xl"></div>
      <div className="flex flex-1 w-full h-full mt-[4px] border-b-8 border-neutral-100"></div>
      <div className="flex flex-1 w-full h-full border-b-8 border-neutral-100 mt-[4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[4px]"></div>

      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px] border-r-8 border-t-8 border-neutral-100 rounded-tr-2xl"></div>
    </div>
  );
};
