import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const NavLinks = [
  {
    id: 1,
    name: "Waste pick-up ",
    link: "/",
  },
  {
    id: 2,
    name: "Education",
    link: "/home-edu",
  },
  {
    id: 3,
    name: "About Us",
    link: "/aboutus",
  },
  {
    id: 4,
    name: "Notifications",
    link: "/",
    icon: faBell,
  },
  {
    id: 5,
    name: "Your Profile",
    link: "/profile",
    icon: faUser,
  },
];

export default NavLinks;
