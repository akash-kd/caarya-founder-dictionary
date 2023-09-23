import { stargazeInstance } from "config";
import { getHeader } from "config";

export const getApplicant = (id) =>
  stargazeInstance.get(`/applicant/${id}`, getHeader());

export const getApplicantResponse = (id, driveId) =>
  stargazeInstance.get(`/applicant/drive/${id}/${driveId}`, getHeader());

export const getAllApplicants = (query = {}) =>
  stargazeInstance.get(
    `/applicant${
      query && Object.keys(query).length > 0
        ? `?${new URLSearchParams(query)}`
        : ""
    }`,
    getHeader()
  );

export const updateApplicant = (id, body) =>
  stargazeInstance.patch(`/applicant/${id}`, body, getHeader());

export const updateApplicantDrive = (id, driveId, body) =>
  stargazeInstance.patch(
    `/applicant/drive/${id}/${driveId}`,
    body,
    getHeader()
  );
