import { getHeader, instance } from "config";

/**
 * The following API has Pagination
 * @param {} query adds queries to the endpoints
 * Queries --> size, page, searchItem, sort&sort, college_location
 * Value for searchItem --> Search strings
 * Values for sort --> college_name/college_location/archived/type&ASC/DESC
 * Values for college_location --> String (Can be sent as multiple queries)
 */
export const findAll = async (type, query = {}) =>
  instance.get(
    `/admin/college/${type}/all${
      Object.keys(query)?.length > 0 ? `?${new URLSearchParams(query)}` : ""
    }`,
    getHeader()
  );

export const getCollegeById = async (type, id) =>
  instance.get(`/admin/college/${type}/${id}`, getHeader());

export const destroy = async (type, college) =>
  instance.delete(`/admin/college/${type}/${college?.id}`, getHeader());

export const createCollegeAdmin = (type, collegeBody) => {
  return instance.post(`admin/college/${type}/add`, collegeBody, getHeader());
};

export const updateCollegeAdmin = (type, update, collegeId) =>
  instance.patch(
    `admin/college/${type}/${collegeId}`,
    { update: update },
    getHeader()
  );
