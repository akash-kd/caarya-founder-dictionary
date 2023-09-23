import { instance } from "../../config";

/**
 * To get token after number verification
 */
export const loginWithFirebaseAuthToken = (token) => {
  return instance.post(`/auth/phone/signIn`, { token });
};

/**
 * To verify if Phone Number exists in DB and is a Chronos user (admin)
 */
export const verifyPhoneNumberForOTP = (phone_number) => {
  return instance.post(`/auth/phone/verify`, { phone_number });
};
