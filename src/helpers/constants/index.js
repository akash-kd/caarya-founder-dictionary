import { MagnifyingGlass, Layout } from "@phosphor-icons/react";

import StyleIcon from "@mui/icons-material/Style";

const mobileBottomNav = [
  {
    name: "Sus Forms",
    path: "/home/sus/0",
    icon: <StyleIcon size={20} />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    image: "/assets/caaryaLogos/logo.png",
    selectedImage: "/assets/caaryaLogos/logo.png",
  },
  {
    name: "Research Bank",
    path: "/home/researchBank",
    icon: <MagnifyingGlass size={20} />,
  },
];
const laptopNav = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Layout size={20} />,
  },
  {
    name: "Sus Forms",
    path: "/home/sus/0",
    icon: <StyleIcon weight="fill" size={20} />,
  },

  {
    name: "Research Bank",
    path: "/home/researchBank",
    icon: <MagnifyingGlass weight="fill" size={20} />,
  },
];

export { mobileBottomNav, laptopNav };
