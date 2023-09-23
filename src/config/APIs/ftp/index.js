import { stargazeInstance } from "config";
import { getHeader } from "config";

export const createFTP = (body) =>
  stargazeInstance.post(`/ftp`, body, getHeader());

export const updateFTP = (id, body) =>
  stargazeInstance.patch(`/ftp/${id}`, body, getHeader());

export const getFTP = (id) => stargazeInstance.get(`/ftp/${id}`, getHeader());

export const getAllFTPs = (query = {}) =>
  stargazeInstance.get(
    `/ftp${
      query && Object.keys(query).length > 0
        ? `?${new URLSearchParams(query)}`
        : ""
    }`,
    getHeader()
  );

export const deleteFTP = (FTPId) =>
  stargazeInstance.delete(`/ftp/${FTPId}`, getHeader());
