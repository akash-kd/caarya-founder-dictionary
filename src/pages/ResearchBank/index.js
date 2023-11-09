import React, { useState } from "react";
import PageHeader from "components/Layout/PageHeader";
import ChronosButton from "components/Comman/Buttons";
import { LongTabs } from "components/Comman/Tabs";
import { useHistory } from "react-router-dom";
import Drafts from "components/ResearchBank/Drafts";
import Completed from "components/ResearchBank/Completed";
import { deleteEntity, getAllEntity } from "config/APIs/startup";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ConfirmModal from "components/Modals/Common/ConfirmModal";
import moment from "moment";
const tabs = [
  {
    label: "Drafts",
    value: "draft",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

const ResearchBank = () => {
  const history = useHistory();
  const user = useSelector((state) => state?.user?.user);
  const [selectedTab, setSelectedTab] = useState("draft");
  const [list, setList] = useState([]);
  const [selectedToDelete, setSelectedToDelete] = useState();

  const getAll = async () => {
    try {
      let res = await getAllEntity();
      let data = res?.data?.data;
      setList(data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOne = async (id) => {
    try {
      let res = await deleteEntity(id);
      getAll();
    } catch (e) {
      console.log(e);
    }
  };

  const onEdit = async (id) => {
    history.push(`/home/sus/${id}`);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <ConfirmModal
        isOpen={selectedToDelete ? true : false}
        closeModal={() => {
          setSelectedToDelete();
        }}
        onAccept={() => {
          deleteOne(selectedToDelete?.id);
          setSelectedToDelete();
        }}
        text={
          <>
            Are you sure you want to delete the entry {selectedToDelete?.name}?
          </>
        }
      />
      <div className="sticky-thc h-[90vh] lg:h-auto">
        <PageHeader
          name="Research Bank"
          ctaComponent={
            <div className="flex gap-4 items-center">
              <ChronosButton
                text="New Startup Story"
                primary
                onClick={() => {
                  history.push("/home/sus/0");
                }}
              />
            </div>
          }
        />

        <div className="flex flex-col space-y-5 bg-white relative">
          <div id="tabs" className="bg-white z-40">
            <LongTabs
              tabs={tabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          {selectedTab == "draft" && (
            <Drafts
              list={list?.filter((i) => i?.isDraft && i?.creatorId == user?.id)}
              onDelete={(val) => {
                setSelectedToDelete(val);
              }}
              onEdit={(val) => {
                onEdit(val);
              }}
              totalLength={
                list?.filter((i) => i?.creatorId == user?.id)?.length || 0
              }
              submissions={list?.filter(
                (i) =>
                  moment(i?.submittedAt).unix >=
                    moment().add(-7, "days").unix &&
                  i?.creatorId == user?.id &&
                  !i?.isDraft
              )}
            />
          )}
          {selectedTab == "completed" && (
            <Completed
              list={list?.filter(
                (i) => !i?.isDraft && i?.creatorId == user?.id
              )}
              onEdit={(val) => {
                onEdit(val);
              }}
              totalLength={
                list?.filter((i) => i?.creatorId == user?.id)?.length || 0
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchBank;
