import BottomNav from "../copmonents/bottom_nav";
import { useState, useRef, useContext} from "react";
import { useHistory } from "react-router-dom";
import StageContext from "../context/stage";

function Chapter1ACover_Startup() {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const fileRef = useRef();
  const [error, SetError] = useState({ name: undefined, img: undefined });
  const history = useHistory();

  const [stage, setStage] = useContext(StageContext);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = () => {
    fileRef.current.click();
  };

  const onBack = () => {
    setStage((stage) => stage - 1);
  };

  const onNext = () => {
    console.log(error,name,name?.length);
    if (name === undefined || name?.length === 0) {
      SetError({ ...error, name: "* name cannot be empty" });
    } else if (!file) {
      SetError({ ...error, img: "* select an image" });
    } else {
      setStage((stage) => stage +1);
    }
  };

  return (
    <div className="sticky-thc flex flex-col bg-white justify-between h-full lg:h-auto px-4 pt-4">
      <div>
        {/* ---- Nav ----- */}
        <div onClick={onBack}>
          <img
            className="w-6 h-6 cursor-pointer"
            src="/assets/svg/pages/drafts/icons/back.svg"
          />
        </div>

        {/* Upper - Title && Upload Form */}

        <div className="flex w-full justify-between items-center my-4">
          <h1 className="font-satoshi font-bold text-primary-magenta-medium text-[28px] leading-[42px]">
            Seek Your First <br /> Startup
          </h1>

          <img
            className="w-[72px] h-[72px]"
            src="/assets/svg/pages/drafts/drafts_rocket.svg"
          ></img>
        </div>
        <h2 className="font-satoshi font-normal text-xl leading-[42px]">
          Add Startup name and logo to start
        </h2>

        {/* Upload Form  */}
        <div className="my-8 py-10 px-2 w-full h-max">
          <div className="flex gap-4 justify-start items-center w-full">
            {file ? (
              <img
                className="w-[72px] h-[72px]"
                src={URL.createObjectURL(file)}
              ></img>
            ) : (
              <img src="/assets/svg/pages/drafts/icons/add_logo.svg" />
            )}
            <button
              onClick={onUpload}
              className="flex gap-2 p-3 text-primary-magenta-medium font-lato font-bold leading-7"
            >
              <img src="/assets/svg/pages/drafts/icons/upload.svg" />
              Upload
            </button>
            <input
              ref={fileRef}
              onChange={onFileChange}
              type="file"
              className="hidden"
            />
          </div>
          {error.img ? (
            <p className="text-red-500 font-lato font-semibold text-xs my-2">
              {error.img}
            </p>
          ) : (
            <></>
          )}

          <input
            onChange={onNameChange}
            type="text"
            placeholder="Add Startup Name Here"
            className="font-lato font-semibold text-xl mt-12 w-full border-0 border-b-2 border-neutral-200 placeholder:text-neutral-300"
          />
          {error.name ? (
            <p className="text-red-500 font-lato font-semibold text-xs my-2">
              {error.name}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>

      <BottomNav onPrevious={onBack} onNext={onNext} />
    </div>
  );
}

export default Chapter1ACover_Startup;
