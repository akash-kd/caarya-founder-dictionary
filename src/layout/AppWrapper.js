import DesktopWrapper from "../components/Layout/DesktopWrapper";
import TabBar from "../components/Layout/TabBar";
import TopBar from "../components/Layout/TopBar";
import React from "react";

function AppWrapper({ children }) {
  return (
    <div className="w-screen h-full overflow-y-hidden">
      <TopBar />
      <div
        className={`${
          window.location.pathname === "/home/drafts/add"
            ? "max-h-[92.35vh] h-[92.35vh]"
            : "max-h-[85vh]"
        } mt-16 lg:hidden overflow-y-auto`}
      >
        {children}
      </div>
      <DesktopWrapper>
        <div className="py-0 mt-0">{children}</div>
      </DesktopWrapper>
      {window.location.pathname === "/home/drafts/add" ? <></> : <TabBar />}
    </div>
  );
}

export default AppWrapper;
