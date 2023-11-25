import { founderDictionaryInstance } from "config";
import { getHeader } from "config";

export const getDashboardStats = () =>
  founderDictionaryInstance.get(`/dashboard`, getHeader());
