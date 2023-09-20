import { useEffect, useState } from "react";
//Axios
import { getAllUsersAdmin } from "config/axios";
//Icons
import {
  XIcon,
  SearchIcon,
  CheckCircleIcon,
  PlusIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { DefaultAvatar } from "helpers/utils/common/icons";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "redux/reducers/toast";
import { fetchAllUsers } from "redux/reducers/dropdown";
//Components
import ChronosButton from "components/Common/Buttons/ChronosButton";
import Toggle from "components/Common/Inputs/ToggleV2";
import EmptyState from "components/Common/EmptyState/index";
import CubeLoader from "components/Common/Loaders/CubeLoader";
import { getUniqueArrayOfObj } from "helpers/utils/common/array";

/**
 *
 * @param {Function} onAdd - Function called when member is added
 * @param {Array} selected
 * @param {Boolean} isOpen
 * @param {Function} closeModal
 * @returns Component to select members to be added
 */
const AddMembersModal = ({
  closeModal,
  onAdd,
  isOpen,
  selected,
  projectId,
  noBg,
  rankTypes,
}) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dropdown.users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [list, setList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [fetching, setFetching] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (users?.length === 0) {
      dispatch(fetchAllUsers());
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (projectId) {
        getProjectMembers(projectId);
      } else if (rankTypes) {
        let temp = [];
        users?.map((i) => {
          let r = i?.designation?.rank?.rank_name?.toLowerCase() || "";
          rankTypes?.map((r1) => {
            if (r.indexOf(r1?.toLowerCase()) > -1) {
              temp.push(i);
            }
          });
        });
        temp = getUniqueArrayOfObj(temp);
        setList(temp);
      } else {
        setList(users);
      }
    }
  }, [isOpen, users]);

  useEffect(() => {
    if (isOpen) {
      if (projectId && !showAll) {
        getProjectMembers(projectId);
      } else if (rankTypes) {
        let temp = [];
        users?.map((i) => {
          let r = i?.designation?.rank?.rank_name?.toLowerCase() || "";
          rankTypes?.map((r1) => {
            if (r.indexOf(r1?.toLowerCase()) > -1) {
              temp.push(i);
            }
          });
        });
        temp = getUniqueArrayOfObj(temp);
        setList(temp);
      } else {
        setList(users);
      }
    }
  }, [showAll]);

  const showErrorNotification = (message) => {
    dispatch(showNotification({ message, type: "error" }));
  };

  const getProjectMembers = async (projectId) => {
    setFetching(true);
    try {
      const response = await getAllUsersAdmin({ project_id: projectId });
      setList(response?.data?.data?.response);
      setFetching(false);
    } catch (err) {
      switch (err.response?.status) {
        case 401:
          showErrorNotification("Unauthorized!");
          break;
        default:
          showErrorNotification("Something went wrong!");
      }
      setFetching(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isOpen && selected) {
      setSelectedUsers([...selected]);
    }
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const addOrRemoveUser = async (item) => {
    let tempSelected = [...selectedUsers] || [];

    if (tempSelected.find((e) => e?.id == item?.id)) {
      tempSelected = tempSelected.filter((e) => e?.id !== item?.id);
    } else {
      tempSelected.push(item);
    }

    setSelectedUsers([...tempSelected]);
  };

  const onSave = () => {
    let temp = selectedUsers.map((item) => item?.id) || [];
    onAdd([...temp]);
    closeModal();
  };

  const isInSearch = (search, item) => {
    let name =
      item?.first_name +
      (item?.middle_name ? item?.middle_name : "") +
      item?.last_name;

    name = name?.toLowerCase();

    return name?.includes(search?.toLowerCase());
  };

  return (
    <>
      <div className="app-bg text-primary-indigo-650 p-5 h-screen relative lg:hidden">
        <div className="chronos-gray-card p-4 max-w-md mx-auto relative">
          <div className="flex flex-row items-center justify-center pt-1">
            <h5
              className="poppins text-xl font-bold text-primary-gray-600"
              id="exampleModalLiveLabel"
            >
              Add Collaborators
            </h5>
            <button
              aria-label="Close"
              className="absolute top-4 right-5"
              type="button"
              onClick={() => closeModal()}
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="">
            <div className="flex flex-row items-start py-3.5">
              <div className="w-5">
                <ChevronRightIcon className="w-4 h-4 mt-1 text-primary-gray-600" />
              </div>
              <div className="text-primary-gray-350 overflow-y-scroll">
                <div className="flex flex-row items-center flex-wrap">
                  {selectedUsers?.length > 0 &&
                    selectedUsers?.map((item, index) => {
                      return (
                        <div className="p-0.5 m-0.5 bg-white rounded-full flex flex-row items-center">
                          <img
                            src={item?.image?.url || DefaultAvatar}
                            alt="owner"
                            className="w-3 h-3 object-cover rounded-full"
                          />
                          <p className="inter mx-1.5 font-normal text-sm text-primary-gray-600">
                            {item?.first_name}
                          </p>
                          <XIcon
                            onClick={() => {
                              addOrRemoveUser(item);
                            }}
                            className="w-3 h-3 text-primary-indigo-650 cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  {/* {selectedUsers.length === 0 && <p>Select users...</p>} */}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 px-4 bg-white rounded-full">
              <img
                src="/assets/images/icons/searchGray.svg"
                alt=""
                className="w-4 h-4 text-primary-gray-350"
              />
              <input
                className="p-0 border-0 bg-transparent pl-2"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e?.target?.value)}
              />
            </div>
          </div>

          {projectId && (
            <div className="flex flex-row mt-3.5 items-center justify-start pl-1">
              <Toggle
                labelLeft
                label={showAll ? "Show project members" : "Show All"}
                enabled={showAll}
                setEnabled={setShowAll}
              />
            </div>
          )}

          <div className="w-full py-4.5">
            <div
              className={`${
                projectId ? "h-55vh" : "h-60vh"
              } max-h-50vh pb-8 grid grid-cols-2 gap-x-2.5 gap-y-5 overflow-y-scroll py-2`}
            >
              {!fetching &&
                list.length > 0 &&
                list.map((item) => {
                  if (searchItem !== "" && !isInSearch(searchItem, item))
                    return;
                  return (
                    <div className="p-1 max-h-32">
                      <div
                        onClick={() => {
                          addOrRemoveUser(item);
                        }}
                        className={`${
                          selectedUsers.find((e) => e?.id === item?.id)
                            ? "user-select-card-selected"
                            : "bg-white-br-9-shadow "
                        } px-2.5 pb-3.5 pt-2.5 h-full relative flex flex-col items-start justify-center cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                      >
                        {selectedUsers.find((e) => e?.id === item?.id) ? (
                          <CheckCircleIcon
                            className={`h-3 w-3 absolute top-1.5 right-1.5 components-modals-multiple-addmember-index-checkcircle`}
                          />
                        ) : (
                          <div className="w-3 h-3 absolute top-1.5 right-1.5 rounded-full flex flex-row items-center justify-center components-modals-multiple-addmember-index-div2">
                            <PlusIcon
                              className={`h-3 w-3 text-primary-gray-350 `}
                            />
                          </div>
                        )}
                        <img
                          className="h-9 w-9 rounded-full object-cover"
                          src={item.image?.url || DefaultAvatar}
                          alt=""
                        />
                        <div className="flex flex-col mt-2.5">
                          <p className="inter text-sm font-normal text-primary-gray-600">
                            {item?.first_name}{" "}
                            {item?.middle_name ? item?.middle_name : ""}{" "}
                            {item?.last_name ? item?.last_name : ""}
                          </p>
                          <p className="inter text-2xs font-normal text-primary-gray-350">
                            {item?.designation?.role?.role_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {!fetching &&
                list?.length < 6 &&
                [1, 2, 3, 4, 5, 6]?.map((i) => {
                  if (i - list?.length > 0) {
                    return <div />;
                  }
                })}
              {fetching && (
                <div className="min-h-50vh col-span-2 w-full flex flex-row items-center justify-center">
                  <CubeLoader />
                </div>
              )}

              {!fetching && list?.length === 0 && (
                <div className="col-span-2">
                  <EmptyState
                    showCTA={projectId && !showAll ? true : false}
                    ctaText="Add members"
                    onClick={() => setShowAll(true)}
                    text={
                      projectId && !showAll
                        ? "This project currently has no members!"
                        : "No members found!"
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-x-4 pb-5 pt-1 px-4.5">
            <ChronosButton
              text="Cancel"
              onClick={() => {
                closeModal();
              }}
              secondary
            />
            <ChronosButton
              text="  Add  "
              onClick={() => {
                onSave();
              }}
              primary
            />
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:block space-y-5 ${
          !noBg ? "chronos-gray-card px-7 pt-8 pb-10" : "h-40vh"
        } max-w-3xl mx-auto w-full relative`}
      >
        <div className="text-primary-indigo-650 mx-2">
          <div className="flex flex-row items-center justify-between">
            <h5
              className="inter font-bold text-sm pl-1.5 text-primary-gray-600"
              id="exampleModalLiveLabel"
            >
              Add Members
            </h5>
            <div className="flex flex-row items-center">
              <p
                onClick={() => {
                  setSelectedUsers([]);
                }}
                className="text-primary-indigo-650 mr-24 inter text-sm cursor-pointer"
              >
                Deselect All
              </p>
              {!noBg && (
                <button
                  aria-label="Close"
                  type="button"
                  onClick={() => closeModal()}
                >
                  <XIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="text-primary-gray-350 mx-2">
          <div className="flex flex-row items-center flex-wrap">
            {selectedUsers?.length > 0 &&
              selectedUsers?.map((item, index) => {
                return (
                  <div className="m-1 p-0.5 rounded-full flex flex-row items-center components-modals-multiple-addmember-index-div3">
                    <img
                      src={item?.image?.url || DefaultAvatar}
                      alt="owner"
                      className="w-3 h-3 object-cover rounded-full"
                    />
                    <p className="inter mx-1.5 font-normal text-primary-gray-600 text-sm">
                      {item?.first_name}
                    </p>
                    <XIcon
                      onClick={() => {
                        addOrRemoveUser(item);
                      }}
                      className="w-3 h-3 text-primary-indigo-650 cursor-pointer"
                    />
                  </div>
                );
              })}
            {/* {selectedUsers.length === 0 && (
              <p className="ml-1.5">Select users...</p>
            )} */}
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
          {projectId && (
            <div className="flex flex-row items-center justify-end mx-2">
              <Toggle
                label="Show All"
                enabled={showAll}
                setEnabled={setShowAll}
              />
            </div>
          )}
        </div>
        <div className="w-full">
          <div
            className={`grid grid-cols-4 2xl:grid-cols-5 gap-x-2.5 gap-y-5 p-2 ${
              !noBg ? "h-40vh" : "h-28vh"
            }  overflow-y-scroll`}
          >
            {!fetching &&
              list.length > 0 &&
              list.map((item) => {
                if (searchItem !== "" && !isInSearch(searchItem, item)) return;

                return (
                  <div
                    onClick={() => {
                      addOrRemoveUser(item);
                    }}
                    className={`${
                      selectedUsers.find((e) => e?.id === item?.id)
                        ? "user-select-card-selected"
                        : "bg-white-br-9-shadow"
                    } px-2.5 py-3.5 max-h-32 relative flex flex-col items-start justify-center space-y-2.5 cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                  >
                    {selectedUsers.find((e) => e?.id === item?.id) ? (
                      <CheckCircleIcon
                        className={`h-3 w-3 absolute top-1.5 right-1.5 components-modals-multiple-addmember-index-checkcircle`}
                      />
                    ) : (
                      <div className="w-3 h-3 rounded-full absolute top-1.5 right-1.5 flex flex-row items-center justify-center components-modals-multiple-addmember-index-div2">
                        <PlusIcon className={`h-3 w-3 text-primary-gray-350`} />
                      </div>
                    )}
                    <img
                      className="h-9 flex-shrink-0 w-9 rounded-full object-cover"
                      src={item.image?.url || DefaultAvatar}
                      alt=""
                    />
                    <div className="flex flex-col items-start">
                      <p className="inter text-left text-sm font-normal text-primary-gray-600">
                        {item?.first_name}{" "}
                        {item?.middle_name ? item?.middle_name : ""}{" "}
                        {item?.last_name ? item?.last_name : ""}
                      </p>
                      <p className="inter text-left text-2xs font-normal text-primary-gray-350">
                        {item?.designation?.role?.role_name}
                      </p>
                    </div>
                  </div>
                );
              })}
            {fetching && (
              <div className="min-h-30vh col-span-4 2xl:col-span-5 w-full flex flex-row items-center justify-center">
                <CubeLoader />
              </div>
            )}

            {!fetching && list?.length === 0 && (
              <div className="col-span-4 2xl:col-span-5">
                <EmptyState
                  showCTA={projectId && !showAll ? true : false}
                  ctaText="Add members"
                  onClick={() => setShowAll(true)}
                  text={
                    projectId && !showAll
                      ? "This project currently has no members!"
                      : "No members found!"
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-stretch space-x-8 absolute bottom-6 right-7">
          <ChronosButton
            text="Cancel"
            secondary
            onClick={() => {
              closeModal();
            }}
          />

          <ChronosButton
            text="Add +"
            primary
            onClick={() => {
              onSave();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddMembersModal;
