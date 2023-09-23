/**
 * The file contains all Sourcing Drive related CRUDS
 */

import { stargazeInstance } from "config";
import { getHeader } from "config";

/**
 * To create
 */
export const createEntity = (body) =>
  stargazeInstance.post(`/talent`, body, getHeader());

/**
 * To delete
 * @param id --> id of the entity
 */
export const deleteEntity = (id) =>
  stargazeInstance.delete(`/talent/${id}`, getHeader());

/**
 * To get all
 */
export const getAllEntity = (query = {}) =>
  stargazeInstance.get(
    `/talent${
      Object.keys(query)?.length > 0 ? `?${new URLSearchParams(query)}` : ""
    }`,
    getHeader()
  );

/**
 * Gives
 * @param id --> id
 */
export const getOneEntity = (id) =>
  stargazeInstance.get(`/talent/${id}`, getHeader());

/**
 * To update
 * @param id --> id of the entity
 */
export const updateEntity = (id, body) =>
  stargazeInstance.patch(`/talent/${id}`, body, getHeader());
