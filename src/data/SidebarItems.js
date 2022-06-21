import { faUser, faStar, faClockRotateLeft, faKey, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const SidebarItems = [
    {
        id: 1,
        name: "Profile",
        icon: faUser,
    },
    {
        id: 2,
        name: "Redeem Points",
        icon: faStar,
    },
    {
        id: 3,
        name: "History",
        icon: faClockRotateLeft,
    },
    {
        id: 4,
        name: "Change Password",
        icon: faKey,
    },
    {
        id: 5,
        name: "Logout",
        icon: faRightFromBracket,
    }
];

export default SidebarItems;