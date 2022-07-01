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
    link: "/",
  },
  {
    id: 3,
    name: "About Us",
    link: "/",
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
