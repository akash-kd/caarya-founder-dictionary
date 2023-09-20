import DesktopWrapper from "../components/Layout/DesktopWrapper";
import TabBar from "../components/Layout/TabBar";
import TopBar from "../components/Layout/TopBar";
import React from "react";

function AppWrapper({ children }) {
  return (
    <div className="w-screen h-full overflow-y-hidden">
      {/* <TopBar />
      <div className="pb-3 max-h-90vh mt-11 lg:hidden overflow-y-auto">
        {children}
      </div> */}
      <DesktopWrapper>
        <div className="py-0 mt-0">{children}</div>
      </DesktopWrapper>
      {/* <TabBar /> */}
    </div>
  );
}

export default AppWrapper;
