import { stargazeInstance } from "config";
import { getHeader, instance } from "config";

/**
 * The following API has Pagination
 * @param {} query adds queries to the endpoints
 * Queries --> size, page, searchItem, sort&sort, rank_type, is_active, college, role_type
 * Value for searchItem --> Search strings
 * Values for is_active --> true/false
 * Values for rank_type -->
 * Values for sort --> college/rank_name/role_name/caarya_id/date_of_joining/discord_id/mentor&ASC/DESC
 */
export const getAllUsersAdmin = (query = {}) => {
  return stargazeInstance.get(
    `/users?` + new URLSearchParams(query),
    getHeader()
  );
};

export const getRolesUserAdmin = () =>
  instance.get(`/admin/user/student/allRoles`, getHeader());
