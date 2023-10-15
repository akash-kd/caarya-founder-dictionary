import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";
import { useHistory } from "react-router-dom";

function PageHeader({ name, ctaComponent = <></>, back, showMobile }) {
  const history = useHistory();
  return (
    <div className="flex flex-row items-center justify-between px-6 py-4 bg-white border-b-2 border-neutral-200 mb-2">
      <h1
        className={`text-sm lg:text-xl h-full flex flex-row items-center text-left font-semibold lg:font-medium font-karla tracking-tight text-primary-magenta-dark`}
      >
        {back && (
          <ArrowLeft
            onClick={() => {
              history.goBack();
            }}
            size={20}
            className="text-primary-magenta-dark mr-4"
          />
        )}
        <p>{name}</p>
      </h1>
      <div className={`${showMobile ? "" : "hidden lg:block"}`}>
        {React.cloneElement(ctaComponent, {})}
      </div>
    </div>
  );
}

export default PageHeader;
