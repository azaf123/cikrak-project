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
    name: "Get Started",
    link: "/login"
  },
  {
    id: 5,
    name: "Notifications",
    link: "/",
    icon: faBell,
  },
  {
    id: 6,
    name: "Your Profile",
    link: "/profile",
    icon: faUser,
  },
];

export default NavLinks;
