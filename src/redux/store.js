import { configureStore } from "@reduxjs/toolkit";

import toasterReducer from "./toaster";
import userReducer from "./user";
// import navigationReducer from "./navigation";
// import collegeReducer from "./college";
// import communityReducer from "./community";
// import sourcingDriveReducer from "./sourcingDrive";
// import dropdown from "./dropdown";
// import ftpReducer from "./ftp";
// import talentReducer from "./talent";

const store = configureStore({
  reducer: {
    toaster: toasterReducer,
    user: userReducer,
    // sideNav: navigationReducer,
    // college: collegeReducer,
    // community: communityReducer,
    // dropdown: dropdown,
    // sourcingDrive: sourcingDriveReducer,
    // ftp: ftpReducer,
    // talent: talentReducer,
  },
});

export default store;
