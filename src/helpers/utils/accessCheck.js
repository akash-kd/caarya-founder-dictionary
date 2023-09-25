import {
  ALL_ACCESS,
  CAARYA_DIRECTOR,
  HR_ADMIN,
  HR_COORDINATOR,
} from "helpers/constants/passes";

export const checkAppAccess = (a, token) => {
  const admin = a || JSON.parse(localStorage.getItem("admin"));

  if (localStorage.getItem("token") || token) {
    return (
      admin?.tags?.includes(ALL_ACCESS) ||
      admin?.tags?.includes(CAARYA_DIRECTOR) ||
      admin?.tags?.includes(HR_ADMIN) ||
      admin?.tags?.includes(HR_COORDINATOR)
    );
  } else return false;
};
