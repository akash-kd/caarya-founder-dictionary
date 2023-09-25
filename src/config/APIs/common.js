import { instance, getMultipartHeader } from "config";

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return instance.post(`/file/upload`, formData, getMultipartHeader());
};
