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
        path: '/Comments',
        icon: <HiOutlineUser />
    },
    {
        key: 'Albums',
        label: 'Albums',
        path: '/Albums',
        icon: <HiOutlineUsers />
    },
    {
        key: 'Photo',
        label: 'Photo',
        path: '/Photo',
        icon: <HiOutlineChartSquareBar />
    },
    {
        key: 'Users',
        label: 'Users',
        path: '/Users',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <HiOutlineLogout />
    }
]