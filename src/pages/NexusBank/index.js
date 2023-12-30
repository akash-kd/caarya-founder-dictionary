import React from "react";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { MdSort, MdExpandMore } from "react-icons/md";

import { getAllEntity } from "config/APIs/startup";
import { useHistory } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NexusBank() {
  const history = useHistory();
  const [startup, setStartup] = useState([]);

  const list = ["#Industry", "#Location", "#Funded"];

  useEffect(() => {
    let isMounted = true;
    const getStartUpData = async () => {
      try {
        const res = await getAllEntity();

        if (res?.data?.data && isMounted) {
          let resData = res.data.data;
          resData = resData.filter((startup) => {
            return startup?.researcherId === null;
          });

          console.log(resData);
          setStartup(resData);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getStartUpData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="gradient-bg w-full min-h-screen">
      <div className="px-4 pt-4 pb-2 flex flex-start">
        <div className="flex flex-start gap-2 text-2x text-neutral-200 font-inter font-semibold">
          <ChevronRightIcon className="w-4" />
          <p>Nexus Bank</p>
        </div>
      </div>

      <div className="flex flex-col flex-start gap-6 p-4">
        <div className="flex items-center gap-8">
          <div className="flex flex-col flex-start gap-2 flex-[1_0_0]">
            <h1 className="font-satoshi text-2.5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A193F2] to-[#C44EB9]">
              Nexus Bank
            </h1>
            <h3 className="font-lato text-sm text-light text-white opacity-60">
              Page description here
            </h3>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
            >
              <path
                d="M53.3751 29.3991C54.3398 29.3991 55.1248 28.6143 55.1248 27.6496V26.1774C55.1248 25.8658 54.9591 25.5778 54.6897 25.4211L36.1753 14.6508V12.5683C37.1557 12.2596 37.8801 12.5602 38.7637 12.9291C39.4228 13.2043 40.1765 13.5191 41.0548 13.519C41.6712 13.519 42.3493 13.3639 43.0987 12.9312C43.3694 12.7749 43.5362 12.486 43.5362 12.1735L43.5363 4.89214C43.5363 4.57955 43.3695 4.29069 43.0988 4.13439C42.828 3.9781 42.4945 3.97799 42.2238 4.13439C41.003 4.83931 40.1336 4.50736 39.0331 4.08714C38.075 3.72117 36.9152 3.27919 35.5285 3.6853C35.1536 3.32666 34.6466 3.10474 34.0879 3.10474C32.937 3.10474 32.0006 4.0411 32.0006 5.19194V14.6509L24.0943 19.2501C23.1967 19.0231 22.2573 18.9019 21.29 18.9019C14.9812 18.9019 9.84869 24.0344 9.84869 30.3432C9.84869 32.5125 10.4556 34.5428 11.5086 36.2731L9.23871 38.4758C9.02072 38.3822 8.78415 38.3311 8.53936 38.3275C8.04936 38.3154 7.58452 38.5036 7.23343 38.8444L1.43076 44.4751C0.704615 45.1799 0.687115 46.3443 1.39182 47.0705L3.48679 49.2295C3.84619 49.5998 4.32504 49.7859 4.80432 49.7859C5.26511 49.7859 5.72635 49.6139 6.08247 49.2685L11.8849 43.638C12.2361 43.2973 12.4336 42.8393 12.4409 42.3482C12.4446 42.1034 12.4006 41.8653 12.3136 41.6447L14.4866 39.536C15.1903 40.0582 15.956 40.5014 16.7701 40.8529V46.8634H15.6558C15.1726 46.8634 14.7808 47.2552 14.7808 47.7384V49.5043H13.9261C13.4429 49.5043 13.0511 49.8961 13.0511 50.3793V53.0204C13.0511 53.5036 13.4429 53.8954 13.9261 53.8954H54.2498C54.733 53.8954 55.1248 53.5036 55.1248 53.0204V50.3795C55.1248 49.8962 54.733 49.5045 54.2498 49.5045H53.395V47.7385C53.395 47.2553 53.0033 46.8635 52.52 46.8635H51.4059V29.3991H53.3751ZM32.4102 27.6491C32.3616 27.4481 32.3075 27.2492 32.2484 27.0524H53.375L53.3752 27.6491H32.4102ZM41.7867 46.8635V29.3991H45.6277V46.8635H41.7867ZM22.5484 41.715C23.9151 41.5648 25.2099 41.1729 26.3894 40.5832V46.8635H22.5484V41.715ZM28.1394 39.5023C29.0007 38.8566 29.7681 38.092 30.4176 37.2337V46.8635H28.1394V39.5023ZM32.1675 33.891C32.533 32.7735 32.7314 31.5812 32.7314 30.3432C32.7314 30.0253 32.7177 29.7105 32.6921 29.3991H36.0084V46.8635H32.1674V33.891H32.1675ZM37.7585 29.3991H40.0367V46.8635H37.7585V29.3991ZM38.4089 5.72186C39.3429 6.07853 40.4507 6.50181 41.7864 6.18441L41.7863 11.6272C40.9534 11.9468 40.3245 11.6842 39.438 11.3142C38.5562 10.946 37.5078 10.5091 36.1754 10.7643V5.32614C36.9349 5.16011 37.6041 5.41452 38.4089 5.72186ZM34.0881 4.85463C34.2708 4.85463 34.4253 5.00906 34.4253 5.19183V13.6416C34.2096 13.5515 33.9664 13.5515 33.7507 13.6416V5.19183C33.7507 5.00906 33.9052 4.85463 34.0881 4.85463ZM34.0881 15.4612L51.0056 25.3025H31.5592C30.4269 23.0051 28.5467 21.1398 26.2377 20.0279L34.0881 15.4612ZM21.2902 20.6519C26.6339 20.6519 30.9814 24.9994 30.9814 30.3432C30.9814 35.6869 26.6339 40.0344 21.2902 40.0344C15.9463 40.0344 11.5989 35.6869 11.5989 30.3432C11.5989 24.9994 15.9463 20.6519 21.2902 20.6519ZM13.1601 38.385L11.1954 40.2915L10.5578 39.6343L12.5424 37.7085C12.7395 37.9421 12.9454 38.1678 13.1601 38.385ZM10.6663 42.3821L4.86382 48.0126C4.83155 48.044 4.7738 48.0431 4.74274 48.0108L2.64777 45.8519C2.61649 45.8197 2.61747 45.7621 2.64963 45.7309L8.45219 40.1003C8.46794 40.0851 8.48774 40.0774 8.51136 40.0774H8.51301C8.52974 40.0776 8.5538 40.0821 8.57316 40.1023L10.6681 42.2612C10.6876 42.2812 10.6913 42.3053 10.6911 42.3221C10.6909 42.3385 10.6864 42.3626 10.6663 42.3821ZM18.5203 41.4446C19.2544 41.6278 20.0164 41.7399 20.7984 41.7732V46.8634H18.5203V41.4446ZM53.3748 52.1456H14.8013V51.2546H53.3748V52.1456ZM51.645 49.5045H16.5311V48.6135H51.645V49.5045ZM49.6559 46.8635H47.3777V29.3991H49.6559V46.8635ZM34.0881 24.5451C35.945 24.5451 37.4558 23.0343 37.4558 21.1773C37.4558 19.3203 35.945 17.8095 34.0881 17.8095C32.2311 17.8095 30.7203 19.3203 30.7203 21.1773C30.7203 23.0343 32.2311 24.5451 34.0881 24.5451ZM34.0881 19.5595C34.9801 19.5595 35.7058 20.2853 35.7058 21.1773C35.7058 22.0694 34.9801 22.7951 34.0881 22.7951C33.196 22.7951 32.4703 22.0694 32.4703 21.1773C32.4703 20.2853 33.196 19.5595 34.0881 19.5595ZM21.2902 38.8054C25.9562 38.8054 29.7523 35.0092 29.7523 30.3432C29.7523 25.6771 25.9562 21.8809 21.2902 21.8809C16.624 21.8809 12.828 25.6771 12.828 30.3432C12.828 35.0092 16.624 38.8054 21.2902 38.8054ZM21.2902 23.6309C24.9912 23.6309 28.0023 26.642 28.0023 30.3432C28.0023 34.0443 24.9912 37.0554 21.2902 37.0554C17.5891 37.0554 14.578 34.0443 14.578 30.3432C14.578 26.642 17.5889 23.6309 21.2902 23.6309Z"
                fill="url(#paint0_linear_909_16104)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_909_16104"
                  x1="9.59331"
                  y1="4.4652"
                  x2="32.6396"
                  y2="55.0907"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A193F2" />
                  <stop offset="1" stopColor="#C44EB9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            className="placeholder:text-white placeholder:opacity-40 flex px-6 py-3 gap-3 rounded-[112px] text-white block bg-white bg-opacity-5"
            placeholder="Start Typing..."
          />
          <div className="flex py-2 flex-start gap-4">
            <div className="flex p-2 justify-center items-center gap-2 bg-white bg-opacity-20 rounded-lg icon-shadow">
              <MdSort className="text-base text-white" />
              <h1 className="font-lato text-white opacity-80 text-xs font-semibold">
                Sort
              </h1>
              <MdExpandMore className="text-base text-white" />
            </div>
            <div className="flex p-2 justify-center items-center gap-2 bg-white bg-opacity-20 rounded-lg icon-shadow">
              <MdSort className="text-base text-white" />
              <h1 className="font-lato text-white opacity-80 text-xs font-semibold">
                Industry
              </h1>
              <MdExpandMore className="text-base text-white" />
            </div>
            <div className="flex p-2 justify-center items-center gap-2 bg-white bg-opacity-20 rounded-lg icon-shadow">
              <MdSort className="text-base text-white" />
              <h1 className="font-lato text-white opacity-80 text-xs font-semibold">
                City
              </h1>
              <MdExpandMore className="text-base text-white" />
            </div>
          </div>
        </div>

        {startup.map((item) => {
          return (
            <div
              className="flex p-4 flex-col flex-start gap-4 border-b border-neutral-200"
              key={item?.id}
            >
              <div className="flex flex-start gap-4 relative">
                <div className="flex flex-col justify-center items-start gap-2 self-stretch max-w-[210px]">
                  <h1 className="font-lato text-2xl font-semibold text-white">
                    {item?.name || "Name Missing"}
                  </h1>
                  <div className="flex items-start content-start gap-x-4 gap-y-1 self-strtch flex-wrap">
                    {list.map((item) => {
                      return (
                        <h4 className="font-lato text-sm font-semibold text-[#F282F5]">
                          {item}
                        </h4>
                      );
                    })}
                  </div>
                </div>

                <CircularProgressbar
                  className="w-20 h-20 text-white font-bold text-center font-lato"
                  styles={buildStyles({
                    textSize: "18px",
                    pathTransitionDuration: 0.5,
                    pathColor: "#A193F2",
                    textColor: "white",
                    trailColor: "white",
                  })}
                  value={item?.progressStats || 0}
                  text={`${item?.progressStats || 0} %`}
                />
              </div>
              <div
                className="flex py-2 justify-end items-center gap-2 self-stretch cursor-pointer"
                onClick={() => {
                  history.push(`startup/${item.id}`);
                }}
              >
                <h1 className="text-center font-lato text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A193F2] to-[#C44EB9]">
                  View Details
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5859 12.0001L8.29297 6.70718L9.70718 5.29297L16.4143 12.0001L9.70718 18.7072L8.29297 17.293L13.5859 12.0001Z"
                    fill="#F4C4F7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5859 12.0001L8.29297 6.70718L9.70718 5.29297L16.4143 12.0001L9.70718 18.7072L8.29297 17.293L13.5859 12.0001Z"
                    fill="url(#paint0_linear_909_16136)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_909_16136"
                      x1="8.29297"
                      y1="5.29297"
                      x2="20.1144"
                      y2="10.8843"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A193F2" />
                      <stop offset="1" stopColor="#C44EB9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NexusBank;
