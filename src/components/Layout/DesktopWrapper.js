import React, { useState } from "react";
import { laptopNav } from "../../helpers/constants";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import WideModalsWrapper from "../Modals/ModalsWrapper/WideModalWrapper";
import LogoutModal from "./LogoutModal";

function DesktopWrapper({ children }) {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const [logOut, setLogOut] = useState(false);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("navList");
    localStorage.removeItem("selectedTab");
    window.location.href = window.location.origin + "/";
  };

  return (
    <>
      <WideModalsWrapper
        isOpen={logOut}
        closeModal={() => {
          setLogOut(false);
        }}
        component={<LogoutModal onLogout={onLogout} />}
      />

      {/* Remove hidden and changed lg:flex to flex - Doesnt support Mobile View Yet */}
      <div className="flex-row items-stretch w-screen min-h-screen hidden lg:flex">
        <div className="flex flex-col justify-between w-full py-6 side-nav">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-row items-center justify-between w-full">
              <a href="/">
                <div className="flex flex-row items-center gap-4 px-6">
                  <img
                    src="/assets/caaryaLogos/logo.png"
                    className="h-8 w-8 object-fill"
                    alt="logo"
                  />
                  <h1 className="flex-[1_0_0] text-lg font-medium font-poppins leading-5">
                    Founders Dictionary
                  </h1>
                </div>
              </a>
            </div>
            <div className="px-6 py-2 flex items-start w-full justify-between border-b border-gray-200">
              <div className="flex flex-col items-start w-full">
                <h2 className="text-base font-lato font-light">Hello,</h2>
                <h1 className="text-xl font-lato font-medium">
                  Mr. {user?.first_name}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start w-full pl-4 pt-4 pb-4 gap-4">
              {laptopNav?.map((item, idx) => {
                return (
                  <a
                    href={item?.path}
                    key={idx}
                    className={`w-full cursor-pointer flex flex-row items-center gap-4 menuitem ${
                      window.location.pathname.includes(item?.path)
                        ? "active"
                        : ""
                    }`}
                  >
                    {item?.image ? (
                      <img
                        src={
                          window.location.pathname.includes(item?.path)
                            ? item?.selectedImage
                            : item?.image
                        }
                        alt=""
                        className="w-6 h-6"
                      />
                    ) : (
                      item?.icon
                    )}
                    <p className="">{item?.name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-full">{children}</div>
      </div>
    </>
  );
}

export default DesktopWrapper;
