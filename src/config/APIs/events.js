import { instance, getHeader } from "config";

// APIs for Events, Events Type & Events Category

/**
 * Gives a Events Stats
 * @param type --> events
 */
export const getEventsStats = (type) =>
  instance.get(`/admin/events/count`, getHeader());

/**
 * To create Event Management Type or Category
 * @param type --> events/type/categories
 */
export const createEvents = (type, body) =>
  instance.post(`/admin/events/${type}`, body, getHeader());

/**
 * To delete Event Management Type or Category
 * @param type --> events/type/categories
 * @param id --> id of Event Management Type or Category
 */
export const deleteEvents = (type, id) =>
  instance.delete(`/admin/events/${type}/${id}`, getHeader());

/**
 * To get all Event Management Type or Category
 * @param type --> events/type/categories
 */
export const getAllEvents = (type, query) =>
  instance.get(
    `/admin/events/${type}/all${
      query && Object.keys(query).length > 0
        ? `?${new URLSearchParams(query)}`
        : ""
    }`,
    getHeader()
  );

/**
 * Gives a Event Management Type or Category
 * @param type --> events/type/categories
 * @param id --> id of Event Management Type or Category
 */
export const getEventsById = (type, id) =>
  instance.get(`/admin/events/${type}/${id}`, getHeader());

/**
 * To update Event Management or Event Management type
 * @param type --> events/type/categories
 * @param id --> id of Event Management Type or Category
 */
export const updateEvents = (type, id, body) =>
  instance.patch(`/admin/events/${type}/${id}`, body, getHeader());
