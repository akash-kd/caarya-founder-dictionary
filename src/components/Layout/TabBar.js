import { useHistory } from "react-router-dom";
import { mobileBottomNav } from "helpers/constants";
import React from "react";

function TabBar() {
  const history = useHistory();
  return (
    <div>
      <div
        className={`w-full tapbar fixed z-30 bottom-0 right-0 tapbar left-0 lg:hidden transform transition-all ease-in-out duration-300 font-poppins`}
      >
        <div className=" w-full bottom-0 p-2  max-w-sm mx-auto">
          <div className="grid grid-cols-5 gap-2">
            {mobileBottomNav.map((item, idx) => {
              const centerNavIdx = Math.floor(mobileBottomNav.length / 2);

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (
                      idx === centerNavIdx &&
                      window.location.pathname === "/home/drafts"
                    ) {
                      history.push("/home/drafts/add");
                    } else {
                      history.push(item?.path);
                    }
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
                      <div
                        style={{
                          background:
                            "linear-gradient(92deg, #F282F5 0%, #903795 100%), #FFF",
                        }}
                        className="cursor-pointer w-12 h-12 -mt-3 flex flex-row items-center justify-center text-white rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M8.16797 8.66797V0.667969H10.8346V8.66797H18.8346V11.3346H10.8346V19.3346H8.16797V11.3346H0.167969V8.66797H8.16797Z"
                            fill="white"
                          />
                        </svg>
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
