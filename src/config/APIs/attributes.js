import { getHeader, instance } from "config";

/**
 * To get all attributes and attribute types
 * @param type --> attributes, attributeTypes
 */
export const getAttributes = (type, typeId) =>
  instance.get(
    `/admin/attributes/all/${type}${typeId ? `?typeId=${typeId}` : ""}`,
    getHeader()
  );
