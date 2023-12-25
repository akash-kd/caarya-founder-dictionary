import { MagnifyingGlass, Layout, Cards } from "@phosphor-icons/react";

import StyleIcon from "@mui/icons-material/Style";

const mobileBottomNav = [
  {
    name: "Dashboard",
    path: "/dashboard",
    image: "/assets/svg/tabbar/dashboard.png",
    selectedImage: "/assets/svg/tabbar/selectedDashboard.png",
  },
  {
    name: "Stories",
    path: "/story",
    image: "/assets/svg/tabbar/story.png",
    selectedImage: "/assets/svg/tabbar/selectedStory.png",
  },
  {
    name: "Add",
    path: "/home/sus/0",
    image: "/assets/svg/tabbar/dashboard.png",
    selectedImage: "/assets/svg/tabbar/dashboard.png",
  },
  {
    name: "Draft",
    path: "/home/drafts",
    image: "/assets/svg/tabbar/draft.png",
    selectedImage: "/assets/svg/tabbar/selectedDraft.png",
  },
  {
    name: "Requests",
    path: "/home/researchBank",
    image: "/assets/svg/tabbar/requests.png",
    selectedImage: "/assets/svg/tabbar/selectedRequests.png",
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
