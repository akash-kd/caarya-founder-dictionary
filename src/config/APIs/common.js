import { getHeader } from "config";
import { instance, getMultipartHeader } from "config";

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return instance.post(`/file/upload`, formData, getMultipartHeader());
};

export const getAllAccess = (type, query = {}) =>
  instance.get(
    `/admin/accessManagement/${type}${
      Object.keys(query)?.length > 0 ? `?${new URLSearchParams(query)}` : ""
    }`,
    getHeader()
  );
