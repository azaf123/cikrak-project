import { faUser, faStar, faClockRotateLeft, faKey, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const SidebarItems = [
    {
        id: 1,
        name: "Profile",
        icon: faUser,
        link: "/"
    },
    {
        id: 2,
        name: "Redeem Points",
        icon: faStar,
        link: "/redeem"
    },
    {
        id: 3,
        name: "History",
        icon: faClockRotateLeft,
        link: "/history"
    },
    {
        id: 4,
        name: "Change Password",
        icon: faKey,
        link: "/change-password"
    },
    {
        id: 5,
        name: "Logout",
        icon: faRightFromBracket,
        link: ""
    }
];

export default SidebarItems;