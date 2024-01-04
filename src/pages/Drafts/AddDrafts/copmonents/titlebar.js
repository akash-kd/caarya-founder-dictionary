export default function TitleBar({heading, subheading, info}) {
  return (
    <>
      <h1 className="title-gradient font-satoshi font-bold text-xl leading-7 text-primary-magenta-dark">
        {heading}
      </h1>
      <h2 className="font-satoshi font-normal text-xl leading-7">
        {subheading}
      </h2>
      <div className="px-4 py-2 flex flex-col gap-2 border-0 border-l-2 border-primary-magenta-medium w-full">
        <img
          className="w-5 h-5"
          src="/assets/svg/pages/drafts/icons/idea.svg"
        />
        <h2 className="font-lato font-light text-xs">
          {info}
        </h2>
      </div>
    </>
  );
}
