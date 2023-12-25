function TopNav({
  onBack,
  startupName = "Love Clip",
  chaperName = "Cover",
  percentage = 50,
}) {
  return (
    <>
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            onClick={onBack}
            className="w-6 h-6 cursor-pointer"
            src="/assets/svg/pages/drafts/icons/back.svg"
          />
          <div className="flex items-center gap-2 ml-4 font-lato  text-neutral-800 text-sm">
            <img className="w-8 h-8 bg-black rounded-lg" />
            <h2 className="font-semibold ">{startupName}</h2>
            <h2 className="font-semibold">/</h2>
            <h2 className="font-light">{chaperName}</h2>
          </div>
        </div>
        <div className="font-satoshi font-medium text-sm text-neutral-800">
          {percentage}%
        </div>
      </div>
      <div className="h-1 w-full bg-neutral-100"></div>
    </>
  );
}

export default TopNav;
