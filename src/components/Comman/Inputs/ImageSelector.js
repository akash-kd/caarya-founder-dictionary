import React, { useEffect, useState } from "react";
import { FilePicker } from "react-file-picker";
import { uploadFile, deleteFile } from "config/APIs/files";
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";
import { Trash } from "@phosphor-icons/react";
import { RiUploadCloudLine } from "react-icons/ri";

const ImageSelector = ({
  onSuccess,
  onError,
  onDelete,
  image,
  uploadElement = <></>,
  disabled,
}) => {
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(image ? true : false);
  const [selectedFile, setSelectedFile] = useState(image || {});
  const [selectedFileSize, setSelectedFileSize] = useState();
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setUploaded(image ? true : false);
    setSelectedFile(image || {});
  }, [image]);

  const handleError = (err) => {
    dispatch(showToast({ message: err, type: "error" }));

    onError && onError(err);
  };

  const handleFilePicker = async (pickedFile) => {
    if (pickedFile.size > 10485760) {
      handleError("File size cannot exceed 10MB");
      return;
    }
    console.log(pickedFile);
    setUploading(true);
    try {
      const response = await uploadFile({ file: pickedFile });
      const { file } = response.data.data;
      onSuccess(file);
      setSelectedFile(file);
      setSelectedFileSize(pickedFile.size);
      setUploaded(true);
    } catch (err) {
      console.log("File Upload error", err);
      const message = `File Upload Error!`;
      handleError(message);
    }
    setUploading(false);
  };

  const handleDelete = async () => {
    setDeleting(true);
    await deleteFile({ id: selectedFile.id });
    setSelectedFile({});
    setUploaded(false);
    setDeleting(false);
    onDelete();
  };

  const handleFilePickerError = (err) => {
    console.log("File Picker Error", err);
    const message = `Please select an appropriate image file!`;
    handleError(message);
  };

  return (
    <div>
      {uploaded ? (
        <>
          <div className="flex max-w-[420px] md:min-w-[420px] py-8 px-20 flex-col gap-2 items-center justify-center bg-neutral-50 rounded-lg shadow-inner">
            <div className="flex flex-col gap-2 sm:px-6 items-center">
              <img
                src={image}
                alt=""
                className="w-32 h-32 rounded object-cover"
              />
              {!disabled && (
                <>
                  {deleting ? (
                    <div className="red text-2xs font-inter">Deleting...</div>
                  ) : (
                    <div
                      onClick={handleDelete}
                      className="text-red-600 text-2xs"
                    >
                      <Trash size={16} />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : uploading ? (
        <div className="w-full flex max-w-[420px] md:min-w-[420px] py-8 px-20 flex-col gap-2 items-center justify-center bg-neutral-50 rounded-lg shadow-inner">
          <div className="flex flex-col gap-2 sm:px-6 items-center">
            <div className="w-20 h-20 rounded-full bg-transparent border border-primary-magenta-dark border-t-0 animate-spin" />
          </div>
        </div>
      ) : (
        <FilePicker
          extensions={["png", "jpeg", "jpg", "svg"]}
          onChange={handleFilePicker}
          onError={handleFilePickerError}
          maxSize={6000}
        >
          <div className="flex max-w-[420px] md:min-w-[420px] py-8 px-20 flex-col gap-2 items-center justify-center bg-neutral-50 rounded-lg shadow-inner">
            <div className="flex flex-col gap-2 sm:px-6 items-center">
              <RiUploadCloudLine size="32" color="#CFCDC9" />
              <div className="text-sm font-semibold font-inter text-neutral-300 text-enter">
                Upload Picture
              </div>
              <div className="text-[10px] font-semibold font-inter text-neutral-300 text-center">
                Supported formats: .JPG, .JPEG, .PNG
              </div>
            </div>
          </div>
        </FilePicker>
      )}
    </div>
  );
};

export default ImageSelector;
