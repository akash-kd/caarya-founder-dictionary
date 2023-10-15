import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { UserCircleIcon, XIcon } from "@heroicons/react/solid";
import { Fade } from "react-awesome-reveal";

import Arrow from "/assets/icons/Arrow.svg";
import { useSelector } from "react-redux";

function AddMembers({
  isOpen,
  closeModal,
  id,
  onUpdate,
  type = "Members",
  selected,
}) {
  const squad = useSelector((state) => state.user.squad);
  const [creating, setCreating] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isOpen) {
      if (selected?.length > 0) setSelectedProfiles(selected);
      setProfiles(squad?.teamMembers);
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const addMembers = async () => {
    setCreating(true);

    onUpdate(id, selectedProfiles);

    setCreating(false);
    closeModal();
  };

  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={() => closeModal()}
      transitionDuration={500}
    >
      <div className="bg-gray-50">
        <div className="h-screen relative">
          <div className="bg-primary-green-light text-primary-green-darkest">
            <div className="flex flex-row w-full items-center justify-between p-3 rounded-t-lg">
              <h5 className="font-poppins">Add {type}</h5>
              <button
                aria-label="Close"
                type="button"
                onClick={() => closeModal()}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-3 relative">
            <div className="relative">
              <Fade triggerOnce>
                <div>
                  <div className="" md="12">
                    <div className="text-left text-sm poppins mb-3">
                      Assign task to multiple members
                    </div>
                  </div>
                </div>
              </Fade>
              <div>
                <div className="" md="12">
                  <div
                    className={`w-full grid grid-cols-1 max-h-75vh overflow-y-auto`}
                  >
                    {profiles?.map((item) => (
                      <div
                        onClick={() => {
                          if (selectedProfiles.includes(item)) {
                            let temp = selectedProfiles.filter(
                              (e) => e?.id !== item?.id
                            );
                            setSelectedProfiles(temp);
                          } else {
                            setSelectedProfiles((state) => [...state, item]);
                          }
                        }}
                        key={item.id}
                        className={`${
                          selectedProfiles.includes(item)
                            ? "bg-primary-green-lightest text-gray-700 hover:bg-theme-indigo-500"
                            : "bg-gray-50  text-gray-900 hover:bg-gray-50"
                        }
                              cursor-pointer px-2 flex items-center justify-start text-sm inter py-2.5 text-gray-400 font-medium sm:flex-1  border-b border-gray-300
                            `}
                      >
                        <p className="card-hover-text flex flex-div items-center justify-start text-left">
                          {item?.image?.url ? (
                            <img
                              src={item?.image?.url}
                              alt=""
                              className="h-7 w-7 rounded-full object-cover"
                            />
                          ) : (
                            <UserCircleIcon className="h-7 w-7 rounded-full" />
                          )}
                          <p className="ml-2 text-gray-500 font-semibold text-base inter pl-2">
                            {item?.first_name}
                          </p>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-50">
                <div className="pt-3 px-3">
                  <div className="w-full flex flex-div items-center justify-end">
                    <div className="bg-primary-green-light rounded-lg">
                      <button
                        className="text-primary-green-darkest font-poppins text-sm cursor-pointer flex flex-div items-center justify-center hover-on-card px-3 py-1"
                        type="button"
                        onClick={addMembers}
                      >
                        Add {type}
                        <img
                          src={Arrow}
                          className="h-2.5 ml-2.5 mt-0.5"
                          alt="arrow"
                        />
                        {creating && (
                          <div className="ml-2 h-5 w-5 rounded-full border border-theme-indigo-200 animate-spin border-t-0" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default AddMembers;
