import { useHistory } from "react-router";
import { mobileBottomNav } from "helpers/constants";

import React from "react";
import { Plus } from "@phosphor-icons/react";
function TabBar() {
  const history = useHistory();
  return (
    <div>
      <div
        className={`w-full fixed z-30 bottom-0 right-0 tapbar left-0 lg:hidden transform transition-all ease-in-out duration-300 font-poppins`}
      >
        <div className=" w-full bottom-0 p-2  max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-2">
            {mobileBottomNav.map((item, idx) => {
              const centerNavIdx = Math.floor(mobileBottomNav.length / 2);

              return (
                <div
                  key={idx}
                  onClick={() => {
                    history.push(item?.path);
                  }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col items-center ${
                      idx === centerNavIdx &&
                      "absolute inset-x-0 -translate-y-3"
                    } ${
                      idx === centerNavIdx
                        ? "text-primary-magenta-medium font-bold"
                        : window.location.pathname.includes(item?.path)
                        ? "text-primary-magenta-medium font-bold"
                        : "text-primary-neutral-800 font-normal"
                    }`}
                  >
                    {idx === centerNavIdx ? (
                      <div className="cursor-pointer w-10 h-10 -mt-2 flex flex-row items-center justify-center bg-primary-magenta-lightest text-primary-magenta-darker rounded-full">
                        <Plus size={20} />
                      </div>
                    ) : item?.image ? (
                      <img
                        src={
                          window.location.pathname.includes(item?.path)
                            ? item?.selectedImage
                            : item?.image
                        }
                        alt=""
                        className={`${
                          idx === centerNavIdx
                            ? "h-7 w-7 scale-150 mb-2.5 drop-shadow-md "
                            : "h-6 w-6"
                        }`}
                      />
                    ) : (
                      React.cloneElement(item?.icon, {})
                    )}
                    {!item?.hideTitle && (
                      <p className={`text-2xs inter mt-1 text-center  `}>
                        {item.name}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
