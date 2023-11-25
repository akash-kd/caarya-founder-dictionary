import { useEffect, useState } from "react";
//Axios

//Icons
import { XIcon } from "@heroicons/react/solid";

//Redux
import { useDispatch, useSelector } from "react-redux";
import ChronosButton from "components/Comman/Buttons";
import { fetchAllUsers } from "redux/dropdown";
import { Drawer } from "@mui/material";
import { CheckCircle, Plus, User } from "@phosphor-icons/react";
//Components

/**
 *
 * @param {Function} onAdd - Function called when member is added
 * @param {Array} selected
 * @param {Boolean} isOpen
 * @param {Function} closeModal
 * @returns Component to select members to be added
 */
const AddOwnerModal = ({
  closeModal,
  onAdd,
  isOpen,
  selected,
  selectOne,
  type = "Owner",
}) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dropdown.users);

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  useEffect(() => {
    if (users?.length === 0) {
      dispatch(fetchAllUsers());
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setList(users);
    }
  }, [isOpen, users]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isOpen && selected) {
      setSelectedProfiles([...selected]);
    }
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const onSave = () => {
    let temp = selectedProfiles.map((item) => item?.id) || [];
    onAdd([...temp]);
    closeModal();
  };

  return (
    <>
      <Drawer
        anchor={window.innerWidth < 1024 ? "bottom" : "right"}
        PaperProps={{
          style: {
            borderRadius:
              window.innerWidth < 1024 ? "20px 20px 0px 0px" : "0px",
            maxHeight: "100vh",
            width: window.innerWidth < 1024 ? "100%" : "340px",
          },
        }}
        open={isOpen}
        onClose={() => closeModal()}
        transitionDuration={250}
      >
        <div className="modals-component md:max-w-xl lg:h-screen lg:pt-2.5 mx-auto w-full transform transition-all ease-in-out duration-150">
          <div className="flex flex-row items-end justify-between p-5 rounded-t-20px">
            <div className="flex flex-col space-y-1">
              <h5
                className="font-inter font-bold text-sm text-primary-gray-1000 flex flex-col items-start"
                id="exampleModalLiveLabel"
              >
                Add {type}
              </h5>
            </div>
            <button
              aria-label="Close"
              type="button"
              onClick={() => {
                closeModal();
              }}
            >
              <XIcon className="h-6 w-6 text-primary-gray-1000" />
            </button>
          </div>
          <div className="relative px-5">
            <input
              type="text"
              className="w-full h-10 rounded-md border border-primary-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-gray-300 focus:border-transparent px-5"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div
            className={`w-full grid grid-cols-2 gap-4 max-h-70vh overflow-y-auto p-3`}
          >
            {list?.map((item) => {
              if (
                search == "" ||
                (search != "" &&
                  (item?.first_name
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                    item?.last_name
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item?.middle_name
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item?.designation?.designation_name
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item?.designation?.role?.role_name
                      ?.toLowerCase()
                      .includes(search.toLowerCase())))
              )
                return (
                  <div className="p-1 max-h-32">
                    <div
                      onClick={() => {
                        if (selectOne) {
                          setSelectedProfiles([item]);
                        } else {
                          if (selectedProfiles.includes(item)) {
                            let temp = selectedProfiles.filter(
                              (e) => e?.id !== item?.id
                            );
                            setSelectedProfiles(temp);
                          } else {
                            setSelectedProfiles((state) => [...state, item]);
                          }
                        }
                      }}
                      className={`${
                        selectedProfiles.find((e) => e?.id === item?.id)
                          ? "bg-primary-green-lightest"
                          : "bg-primary-gray-100"
                      } px-2.5 pb-3.5 pt-2.5 rounded-lg h-full relative flex flex-col items-start justify-center cursor-pointer transition transform hover:scale-105 ease-in-out duration-150`}
                    >
                      {selectedProfiles.find((e) => e?.id === item?.id) ? (
                        <CheckCircle
                          className={`h-3 w-3 absolute top-1.5 right-1.5 components-modals-multiple-addmember-index-checkcircle`}
                        />
                      ) : (
                        <div className="w-3 h-3 absolute top-1.5 right-1.5 rounded-full flex flex-row items-center justify-center components-modals-multiple-addmember-index-div2">
                          <Plus className={`h-3 w-3 text-primary-gray-350 `} />
                        </div>
                      )}
                      {item.image?.url ? (
                        <img
                          className="h-9 w-9 rounded-full object-cover"
                          src={
                            item.image?.url || "/assets/images/defaultUser.png"
                          }
                          alt=""
                        />
                      ) : (
                        <div className="h-9 w-9 text-primary-green-700 rounded-full object-cover bg-primary-green-30 flex flex-row items-center justify-center">
                          <User size={20} />
                        </div>
                      )}
                      <div className="flex flex-col mt-2.5">
                        <p className="font-inter text-sm font-normal text-primary-gray-600">
                          {item?.first_name}{" "}
                          {item?.middle_name ? item?.middle_name : ""}{" "}
                          {item?.last_name ? item?.last_name : ""}
                        </p>
                        <p className="font-inter text-2xs font-normal text-primary-gray-350">
                          {item?.designation?.role?.role_name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>

          <div className="mt-8 flex w-full flex-row items-center justify-between px-5 pb-5">
            <ChronosButton
              text="Cancel"
              secondary
              onClick={() => {
                closeModal();
              }}
            />

            <ChronosButton
              text="Add"
              primary
              icon={<Plus className="w-4 h-4 mr-2" />}
              reverseIcon
              onClick={() => {
                onSave();
              }}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddOwnerModal;
