import { useEffect, useState } from "react";
//Icons
import { XIcon, SearchIcon, CheckCircleIcon } from "@heroicons/react/solid";
import EmptyState from "components/Comman/EmptyState";
import ChronosButton from "components/Comman/Buttons";
import DefaultAvatar from "/assets/icons/avatar.png";

//Components

const AddMultipleModal = ({
  closeModal,
  onAdd,
  isOpen,
  selected,
  list,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isOpen && selected) {
      setSelectedItems([...selected]);
    }
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const addOrRemoveItems = async (item) => {
    let tempSelected = [...selectedItems] || [];

    if (tempSelected.find((e) => e?.value == item?.value)) {
      tempSelected = tempSelected.filter((e) => e?.value !== item?.value);
    } else {
      tempSelected.push(item);
    }

    setSelectedItems([...tempSelected]);
  };

  const onSave = () => {
    let temp = selectedItems.map((item) => item?.value);

    onAdd([...temp]);
    closeModal();
  };

  return (
    <>
      <div className="h-screen relative lg:hidden">
        <div className="app-bg text-primary-indigo-650 bg-primary-gray-100 ">
          <div className="flex flex-row items-center justify-between px-12 py-4">
            <h5 className="inter font-bold text-sm">Add {label}</h5>
            <button
              aria-label="Close"
              type="button"
              onClick={() => closeModal()}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="px-7">
          <div className="h-12vh text-primary-gray-350 p-3 overflow-y-scroll">
            <div className="flex flex-row items-center flex-wrap">
              {selectedItems?.length > 0 &&
                selectedItems?.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="m-1.5 components-controls-tags-single-div"
                    >
                      <div className="py-1 px-4 rounded-full bg-indigo-100">
                        <div className="flex flex-row items-center justify-between text-primary-gray-500 space-x-2 font-medium">
                          <p className="text-xs">{item?.label} </p>
                          <XIcon
                            onClick={() => {
                              addOrRemoveItems(item);
                            }}
                            className="w-3 h-3 text-primary-indigo-650 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              {selectedItems.length === 0 && <p>Select {label}...</p>}
            </div>
          </div>
          <div className="px-4">
            <div className="flex flex-row items center bg-primary-gray-100 rounded-full py-2 px-4">
              <SearchIcon className="w-5 h-5 text-primary-gray-350" />
              <input
                className="p-0 border-0 bg-transparent pl-2"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e?.target?.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full px-7 z-20 absolute bottom-20">
          <div
            className={`chronos-gray-card max-w-md mx-auto h-60vh bg-primary-gray-100 p-4 overflow-y-scroll`}
          >
            <div
              className={
                list?.length > 0 && list[0]?.image
                  ? "grid grid-cols-2 gap-4  "
                  : "flex flex-row items-center flex-wrap ml-2"
              }
            >
              {!fetching ? (
                list?.length > 0 ? (
                  list?.map((item) => {
                    if (
                      searchItem !== "" &&
                      !item?.label
                        ?.toLowerCase()
                        .includes(searchItem.toLowerCase())
                    )
                      return;
                    return item?.image ? (
                      <div
                        key={item?.id}
                        onClick={() => {
                          addOrRemoveItems(item);
                        }}
                        className={`bg-white-br-9-shadow bg-white shadow-sm rounded-md  w-full px-2 py-3.5  relative flex flex-col items-center  space-y-2.5 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                      >
                        <CheckCircleIcon
                          className={`h-5 w-5 absolute top-1.5 right-1.5 components-modals-multi-checkcircleicon ${
                            selectedItems.find((e) => e?.value === item?.value)
                              ? "visible"
                              : "invisible"
                          }`}
                        />

                        <img
                          className="h-9 w-9 rounded-full"
                          src={item.image?.url || DefaultAvatar}
                          alt=""
                        />
                        <p className="inter text-sm font-normal text-center w-full break-words  text-primary-gray-600">
                          {item?.label}
                        </p>
                      </div>
                    ) : (
                      <div
                        key={item?.id}
                        onClick={() => {
                          addOrRemoveItems(item);
                        }}
                        className="m-1.5 components-controls-tags-single-div relative"
                      >
                        <div className="py-1 px-4 rounded-full bg-indigo-100">
                          <div className="flex flex-row items-center justify-between text-primary-gray-500 space-x-2 font-medium">
                            <p className="text-xs">{item?.label} </p>
                            <CheckCircleIcon
                              className={`h-5 w-5 components-modals-multi-checkcircleicon2 ${
                                selectedItems.find(
                                  (e) => e?.value === item?.value
                                )
                                  ? "block"
                                  : "hidden"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <EmptyState text={`There are currently no ${label}`} />
                )
              ) : (
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <div
                      onClick={() => {
                        addOrRemoveItems(item);
                      }}
                      className={`bg-white-br-9-shadow px-2 py-3.5 h-24 relative flex flex-col items-center justify-center space-y-2.5 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                    >
                      <CheckCircleIcon
                        className={`h-5 w-5 absolute top-1.5 right-1.5 components-modals-multi-checkcircleicon ${
                          selectedItems.find((e) => e?.id === item?.id)
                            ? "visible"
                            : "invisible"
                        }`}
                      />

                      <img
                        className="h-9 w-9 rounded-full"
                        src={item.image?.url}
                        alt=""
                      />
                      <p className="inter text-sm h-4 rounded bg-gray-200 animate-pulse w-8/12 font-normal text-primary-gray-600"></p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <img
            src="/assets/images/modalBottom.svg"
            alt=""
            className="w-full max-w-md mx-auto relative"
          />
          <img
            onClick={() => {
              onSave();
            }}
            src="/assets/images/icons/addButton.svg"
            alt=""
            className="absolute bottom-6 left-1/2  -translate-x-1/2  z-30 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150 components-modals-multi-img"
          />
        </div>
      </div>
      <div className="hidden lg:block space-y-5 chronos-gray-card px-7 py-8">
        <div className="text-primary-indigo-650 mx-2">
          <div className="flex flex-row items-center justify-between">
            <h5
              className="inter font-bold text-sm pl-1.5"
              id="exampleModalLiveLabel"
            >
              Add {label}
            </h5>
            <button
              aria-label="Close"
              type="button"
              onClick={() => closeModal()}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="text-primary-gray-350 mx-2">
          <div className="flex flex-row items-center flex-wrap">
            {selectedItems?.length > 0 &&
              selectedItems?.map((item, index) => {
                return (
                  <div className="m-1.5 components-controls-tags-single-div">
                    <div className="py-1 px-4 rounded-full bg-indigo-100">
                      <div className="flex flex-row items-center justify-between text-primary-gray-500 space-x-2 font-medium">
                        <p className="text-xs">{item?.label} </p>
                        <XIcon
                          onClick={() => {
                            addOrRemoveItems(item);
                          }}
                          className="w-3 h-3 text-primary-indigo-650 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            {selectedItems.length === 0 && (
              <p className="ml-1.5">Select {label}...</p>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mx-2">
          <div className="flex flex-row items w-10/12 center chronos-gray-card py-2 px-4">
            <SearchIcon className="w-5 h-5 text-primary-gray-350" />
            <input
              className="p-0 border-0 bg-transparent pl-2"
              placeholder="Search..."
              value={searchItem}
              onChange={(e) => setSearchItem(e?.target?.value)}
            />
          </div>
          <ChronosButton
            primary
            text="Add +"
            onClick={() => {
              onSave();
            }}
          />
        </div>

        <div className="w-full max-h-40vh overflow-y-auto">
          <div
            className={
              list?.length > 0 && list[0]?.image
                ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                : "flex flex-row items-center flex-wrap ml-2"
            }
          >
            {!fetching ? (
              list?.length > 0 ? (
                list?.map((item) => {
                  if (
                    searchItem !== "" &&
                    !item?.label
                      ?.toLowerCase()
                      .includes(searchItem.toLowerCase())
                  )
                    return;
                  return item?.image ? (
                    <div
                      onClick={() => {
                        addOrRemoveItems(item);
                      }}
                      className={`bg-white-br-9-shadow px-2 py-3.5 h-24 m-2 relative flex flex-col items-center justify-center space-y-2.5 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                    >
                      <CheckCircleIcon
                        className={`h-5 w-5 absolute top-1.5 right-1.5 components-modals-multi-checkcircleicon2 ${
                          selectedItems.find((e) => e?.value === item?.value)
                            ? "visible"
                            : "invisible"
                        }`}
                      />

                      <img
                        className="h-9 w-9 rounded-full"
                        src={item.image?.url}
                        alt=""
                      />
                      <p className="inter text-sm font-normal text-primary-gray-600">
                        {item?.label}
                      </p>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        addOrRemoveItems(item);
                      }}
                      className="m-1.5 components-controls-tags-single-div relative"
                    >
                      <div className="py-1 px-4 rounded-full bg-indigo-100">
                        <div className="flex flex-row items-center justify-between text-primary-gray-500 space-x-2 font-medium">
                          <p className="text-xs">{item?.label} </p>
                          <CheckCircleIcon
                            className={`h-5 w-5 components-modals-multi-checkcircleicon2 ${
                              selectedItems.find(
                                (e) => e?.value === item?.value
                              )
                                ? "block"
                                : "hidden"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <EmptyState text={`There are currently no ${label}`} />
              )
            ) : (
              [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                  <div
                    onClick={() => {
                      addOrRemoveItems(item);
                    }}
                    className={`bg-white-br-9-shadow px-2 py-3.5 h-24 m-2 relative flex flex-col items-center justify-center space-y-2.5 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                  >
                    <CheckCircleIcon
                      className={`h-5 w-5 absolute top-1.5 right-1.5 components-modals-multi-checkcircleicon2 ${
                        selectedItems.find((e) => e?.id === item?.id)
                          ? "visible"
                          : "invisible"
                      }`}
                    />

                    <img
                      className="h-9 w-9 rounded-full"
                      src={item.image?.url}
                      alt=""
                    />
                    <p className="inter text-sm h-4 rounded bg-gray-200 animate-pulse w-8/12 font-normal text-primary-gray-600"></p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMultipleModal;
