import { Timer } from "@phosphor-icons/react";
import moment from "moment";

function Drafts({ list, onDelete, onEdit, totalLength = 0, submissions }) {
  const getPercentage = (item) => {
    let allKeys = Object.keys(item);
    let filledKeys = [];

    Object.keys(item)?.map((key) => {
      let v = item[key];
      if (v) filledKeys.push(key);
    });

    return parseInt((filledKeys?.length * 100) / allKeys?.length);
  };

  return (
    <div className="max-7xl mx-auto p-4 w-full flex flex-col space-y-10">
      <h1 className="text-primary-neutral-500 font-inter text-base font-light leading-6">
        Here you will find all the startups that you are currently researching
        on. You can have at most 5 drafts at a time
      </h1>
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-5 lg:space-x-8">
        <div className="w-full lg:w-1/12 flex flex-row items-center justify-center text-primary-neutral-500 font-inter text-lg font-semibold leading-6">
          This Week
        </div>
        <div className="grid grid-cols-3 gp-8 w-full lg:w-11/12">
          <div className="py-4 flex flex-col items-center">
            <h1 className="text-primary-magenta-medium font-inter text-2xl lg:text-[40px] font-semibold lg:leading-[60px] text-center">
              {
                list?.filter(
                  (i) =>
                    moment(i?.createdAt).unix >= moment().add(-7, "days").unix
                )?.length
              }
            </h1>
            <p className="text-primary-neutral-500 font-inter text-xs font-light left-5 text-center">
              New Drafts
            </p>
          </div>
          <div className="py-4 flex flex-col items-center">
            <h1 className="flex flex-row items-baseline space-x-2 text-primary-magenta-medium font-inter text-2xl lg:text-[40px] font-semibold lg:leading-[60px] text-center">
              <span>00</span>{" "}
              <span className="text-primary-neutral-500 text-base font-inter font-light leading-4">
                /
              </span>
              <span className="text-primary-neutral-500 text-base font-inter font-light leading-4">
                00
              </span>
            </h1>
            <p className="text-primary-neutral-500 font-inter text-xs font-light left-5 text-center">
              Research Requests
            </p>
          </div>
          <div className="py-4 flex flex-col items-center">
            <h1 className="flex flex-row items-baseline space-x-2 text-primary-magenta-medium font-inter text-2xl lg:text-[40px] font-semibold lg:leading-[60px] text-center">
              <span>{submissions?.length || 0}</span>{" "}
              <span className="text-primary-neutral-500 text-base font-inter font-light leading-4">
                /
              </span>
              <span className="text-primary-neutral-500 text-base font-inter font-light leading-4">
                {totalLength}
              </span>
            </h1>
            <p className="text-primary-neutral-500 font-inter text-xs font-light left-5 text-center">
              Submissions
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 lg:px-2 flex flex-col space-y-8">
        {list?.map((item) => {
          return (
            <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10 justify-between">
              <div className="research-card relative lg:w-10/12 p-6 flex flex-col lg:flex-row items-stretch lg:space-x-8">
                <img
                  src={item?.image?.url || "/assets/images/demo.png"}
                  alt=""
                  className="rounded-lg object-contain w-[120px] h-[120px] aspect-square"
                />
                <div className="flex flex-col space-y-6 w-11/12">
                  <div className="flex flex-row items-start justify-between space-x-2">
                    <div className="flex flex-col items-start">
                      <h1 className="text-primary-neutral-800 font-poppins text-lg font-medium leading-7">
                        {item?.name}
                      </h1>
                      <h2 className="text-primary-neutral-800 font-inter text-xs font-light leading-7">
                        {item?.founders?.length > 0
                          ? item?.founders[0]?.name
                          : "No Founders"}{" "}
                        {item?.founders?.length > 1
                          ? `+${item?.founders?.length - 1}`
                          : ""}
                      </h2>
                    </div>
                    <div className="flex flex-row items-stretch space-x-2 absolute top-6 right-6">
                      <div className="flex flex-row items-center space-x-2 text-secondary-fusion-500 bg-secondary-fusion-30 py-1 px-2 font-inter text-2xs font-semibold leading-4">
                        <Timer size={16} />
                        <p>2 Days</p>
                      </div>

                      <div className="flex flex-row items-center space-x-2 text-primary-fusion-700 bg-primary-fusion-30 py-1 px-2 font-inter text-2xs font-semibold leading-4">
                        <p>In Progress</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between space-x-2">
                    <div className="w-11/12 bg-primary-neutral-100 rounded-full h-2">
                      <div
                        className="bg-primary-magenta-lighter rounded-full h-2"
                        style={{ width: `${getPercentage(item)}%` }}
                      />
                    </div>
                    <p className="text-black font-inter text-sm font-semibold leading-6">
                      {getPercentage(item)}%
                    </p>
                  </div>
                  <div className="flex flex-row text-primary-neutral-400 font-inter text-xs font-light items-center justify-between space-x-2">
                    <p>Created On • {moment(item?.createdAt).format("ll")}</p>
                    <p>
                      Last Edited •{" "}
                      {moment(item?.updatedAt).startOf("day").fromNow()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-8">
                <div
                  onClick={() => {
                    onEdit(item?.id);
                  }}
                  className="w-16 h-16 flex flex-row cursor-pointer items-center justify-center text-primary-neutral-500 bg-primary-neutral-50 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M14.0587 9.52L14.9787 10.44L5.91875 19.5H4.99875V18.58L14.0587 9.52ZM17.6587 3.5C17.4087 3.5 17.1487 3.6 16.9587 3.79L15.1287 5.62L18.8787 9.37L20.7087 7.54C21.0987 7.15 21.0987 6.52 20.7087 6.13L18.3687 3.79C18.1687 3.59 17.9187 3.5 17.6587 3.5ZM14.0587 6.69L2.99875 17.75V21.5H6.74875L17.8087 10.44L14.0587 6.69Z"
                      fill="#696763"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    onDelete(item);
                  }}
                  className="w-16 h-16 flex flex-row cursor-pointer items-center justify-center text-primary-neutral-500 bg-primary-neutral-50 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M16 9.5V19.5H8V9.5H16ZM14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5H15.5L14.5 3.5ZM18 7.5H6V19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5Z"
                      fill="#696763"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Drafts;
