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
  { id: 4, name: "Get Started", link: "/" },
  {
    id: 5,
    name: "Notifications",
    link: "/",
    icon: faBell,
  },
  {
    id: 6,
    name: "Your Profile",
    link: "/",
    icon: faUser,
  },
];

export default NavLinks;
