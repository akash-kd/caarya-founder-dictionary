import {
  Stack,
  User,
  Users,
  GraduationCap,
  LinkedinLogo,
  StackSimple,
} from "@phosphor-icons/react";

import StyleIcon from '@mui/icons-material/Style';

import EventIcon from '@mui/icons-material/Event';

const mobileBottomNav = [
  {
    name: "Tribe",
    path: "/home/community",
    image: "/assets/svg/tabbar/tribe.svg",
    selectedImage: "/assets/svg/tabbar/selectedTribe.svg",
  },

  {
    name: "Requests",
    path: "/home/talents",

    image: "/assets/svg/tabbar/requests.svg",
    selectedImage: "/assets/svg/tabbar/selectedRequests.svg",
  },
  {
    name: "FTP",
    path: "/home/ftp",
    image: "/assets/caaryaLogos/logo.png",
    selectedImage: "/assets/caaryaLogos/logo.png",
  },
  {
    name: "Drives",
    path: "/home/drives",

    image: "/assets/svg/tabbar/drives.svg",
    selectedImage: "/assets/svg/tabbar/selectedDrives.svg",
  },

  {
    name: "CGCs",
    path: "/home/cgc",

    image: "/assets/svg/tabbar/cgc.svg",
    selectedImage: "/assets/svg/tabbar/selectedCgc.svg",
  },
];
const laptopNav = [
  {
    name: "Sus Forms",
    path: "/home/sus",
    icon: <StyleIcon />,
  },

  {
    name: "Dictionary",
    path: "/home/drives",
    icon: <EventIcon />,
  },
  {
    name: "Leads",
    path: "/home/community/count",
    icon: <EventIcon />,
  },
];

export { mobileBottomNav, laptopNav };
