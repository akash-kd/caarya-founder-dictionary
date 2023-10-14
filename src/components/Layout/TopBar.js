import { LogoutIcon, UserGroupIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router";

import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutlined } from "@heroicons/react/outline";

function TopBar() {
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("navList");
    localStorage.removeItem("selectedTab");
    window.location.href = window.location.origin + "/";
  };
  return (
    <div className="fixed w-full top-0 right-0 left-0 px-5 py-2 top-nav flex flex-row items-center justify-between z-50 lg:hidden">
      <a href="/">
        <div className="flex flex-row items-center space-x-1">
          <img
            src="/assets/caaryaLogos/logo.png"
            className="h-6 w-6 object-fill"
            alt="logo"
          />
          <h1 className="font-bold font-karla text-xl text-primary-primary-green-darkest">
            Founders Dictionary
          </h1>
        </div>
      </a>

      <div className="flex flex-row items-center justify-between space-x-4">
        {/* {window.location.pathname.includes("/home/wishlist") ? (
          <HeartIcon
            onClick={() => {
              window.location.pathname.includes("/home/wishlist");
              history.push("/home/wishlist");
            }}
            className="h-6 w-6 text-primary-green-dark"
          />
        ) : (
          <HeartIconOutlined
            onClick={() => {
              window.location.pathname.includes("/home/wishlist");
              history.push("/home/wishlist");
            }}
            className="h-6 w-6 text-primary-green-dark"
          />
        )} */}
        {/* <UserGroupIcon
          onClick={() => {}}
          className="h-5 w-5 text-primary-green-darker"
        /> */}
        <LogoutIcon
          onClick={() => {
            onLogout();
          }}
          className="h-6 w-6 text-primary-green-darker"
        />
      </div>
    </div>
  );
}

export default TopBar;
