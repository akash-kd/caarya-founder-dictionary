import { stargazeInstance } from "config";
import { getHeader } from "config";

export const getCommunityCount = () =>
  stargazeInstance.get(`/community/count`, getHeader());

export const getUser = (id) => stargazeInstance.get(`/community/${id}`, getHeader());

export const getAllUsers = (query = {}) =>
  stargazeInstance.get(
    `/community${
      query && Object.keys(query).length > 0
        ? `?${new URLSearchParams(query)}`
        : ""
    }`,
    getHeader()
  );
