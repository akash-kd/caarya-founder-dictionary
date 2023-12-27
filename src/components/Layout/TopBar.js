import { LogoutIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { privateRoutes } from "routes/PrivateRoute";

function TopBar() {
  const user = useSelector((state) => state?.user?.user);
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("navList");
    localStorage.removeItem("selectedTab");
    window.location.href = window.location.origin + "/";
  };
  return (
    <div className="fixed w-full top-0 right-0 left-0 px-3 py-4 top-nav flex flex-row items-center justify-between z-50 lg:hidden">
      <a href="/">
        <div className="flex flex-row items-center space-x-3">
          <img
            src="/assets/caaryaLogos/logo.png"
            className="h-8 w-8 object-cover"
            alt="logo"
          />
          <div className="bg-white h-9 w-0.5" />
          <h1 className="font-bold font-satoshi text-lg text-white">
            {privateRoutes?.find((a) => a?.path == window?.location?.pathname)
              ? privateRoutes?.find(
                  (a) => a?.path == window?.location?.pathname
                )?.name
              : "Founders Dictionary"}
          </h1>
        </div>
      </a>

      <div className="flex flex-row items-center justify-between space-x-4">
        <img
          src={user?.image?.url}
          alt=""
          className="w-8 h-8 bg-primary-neutral-100 rounded-full"
        />
        <LogoutIcon
          onClick={() => {
            onLogout();
          }}
          className="h-6 w-6 text-white"
        />
      </div>
    </div>
  );
}

export default TopBar;
