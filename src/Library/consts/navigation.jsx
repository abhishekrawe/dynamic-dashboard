import {
    HiOutlineChartBar,
    HiOutlineUser,
    HiOutlineHome,
    HiOutlineChartSquareBar,
    HiOutlineUsers,
    HiOutlineAnnotation,
    HiOutlineLogout,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineHome />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineChartBar />
    },
    {
        key: 'Comments',
        label: 'Comments',
        icon: <HiOutlineUser />
    },
    {
        key: 'Albums',
        label: 'Albums',
        icon: <HiOutlineUsers />
    },
    {
        key: 'Photo',
        label: 'Photo',
        icon: <HiOutlineChartSquareBar />
    },
    {
        key: 'Users',
        label: 'Users',
        path: '/users',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <HiOutlineLogout />
    }
]