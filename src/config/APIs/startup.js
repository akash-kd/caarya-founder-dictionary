/**
 * The file contains all Startup related CRUDS
 */

import { founderDictionaryInstance } from "config";
import { getHeader } from "config";

/**
 * To create
 */
export const createEntity = (body) =>
  founderDictionaryInstance.post(`/startup`, body, getHeader());

/**
 * To delete
 * @param id --> id of the entity
 */
export const deleteEntity = (id) =>
  founderDictionaryInstance.delete(`/startup/${id}`, getHeader());

/**
 * To get all
 */
export const getAllEntity = (query = {}) =>
  founderDictionaryInstance.get(
    `/startup${
      Object.keys(query)?.length > 0 ? `?${new URLSearchParams(query)}` : ""
    }`,
    getHeader()
  );

/**
 * Gives
 * @param id --> id
 */
export const getOneEntity = (id) =>
  founderDictionaryInstance.get(`/startup/${id}`, getHeader());

/**
 * To update
 * @param id --> id of the entity
 */
export const updateEntity = (id, body) =>
  founderDictionaryInstance.patch(`/startup/${id}`, body, getHeader());

/**
 * To get sus flag
 */
export const getSusFlag = (body) =>
  founderDictionaryInstance.post(`/check`, body, getHeader());
