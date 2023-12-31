import BottomNav from "../copmonents/bottom_nav";
import TopNav from "../copmonents/top_nav";
import Status from "../copmonents/status";
import TitleBar from "../copmonents/titlebar";

function DraftLayout({
  children,
  heading,
  subheading,
  chapName,
  info,
  onPrevious,
  onNext,
  bottomDisabled,
}) {
  return (
    <div className="sticky-thc flex flex-col bg-white justify-between h-full lg:h-auto">
      <TopNav onBack={onPrevious} chaperName={chapName} />

      {/* Main Body --------- */}
      <main className="flex flex-col gap-4 before:bg-blue-300 p-4 w-full h-full overflow-y-scroll">
        <Status />
        <TitleBar heading={heading} subheading={subheading} info={info} />
        {children}
      </main>
      <BottomNav
        disabled={bottomDisabled}
        onPrevious={onPrevious}
        onNext={onNext}
        padding
      />
    </div>
  );
}

export default DraftLayout;
