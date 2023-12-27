export const Flow1 = ({ padding }) => {
  return (
    <div
      className={`grid grid-cols-4 grid-rows-2 h-[100px] items-start ${
        padding ? "pl-[50px] pr-[56px]" : "pl-[65px] pr-[70px]"
      } py-0 relative`}
    >
      <div className="flex flex-1 w-full h-full mt-[4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[4px]"></div>
      <div className="rounded-bl-2xl flex flex-1 w-full h-full border-l-8 border-b-8 border-red-800 mt-[4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[4px]"></div>

      <div className="rounded-tl-2xl flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="flex flex-1 w-full h-full mt-[-4px]"></div>
      <div className="rounded-tr-2xl flex flex-1 w-full h-full mt-[-4px] border-r-8 border-t-8 border-red-800"></div>
    </div>
  );
};
