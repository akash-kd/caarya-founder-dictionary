import { ArrowLeft } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { privateRoutes } from "../../routes/PrivateRoute";

function PageHeader({ name, ctaComponent = <></>, back, showMobile }) {
  const routes = useRouteMatch();
  const history = useHistory();
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    let page = privateRoutes?.find((p) => p?.path == routes?.path);
    console.log(page);
    setHeading(page?.name);
    setDescription(page?.description);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-100">
      <div className="relative flex items-stretch md:w-8/12 h-full">
        <h1
          className={`text-sm lg:text-xl h-full flex flex-row items-center text-left font-semibold lg:font-medium font-karla tracking-tight text-primary-gray-800 lg:text-primary-green-dark`}
        >
          {back && (
            <ArrowLeft
              onClick={() => {
                history.goBack();
              }}
              size={20}
              className="text-primary-gray-800 mr-4"
            />
          )}{" "}
          <p>{name}</p>
        </h1>
      </div>
        <div className={`${showMobile ? "" : "hidden lg:block"}`}>
          {React.cloneElement(ctaComponent, {})}
        </div>
    </div>
  );
}

export default PageHeader;
