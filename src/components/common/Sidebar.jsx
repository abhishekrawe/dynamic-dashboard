import React from "react";
import { Link } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../Library/consts/navigation";

const linkClasses = 'flex items-center gap-2 font-semibold text-gray-700 px-3 py-2 hover:bg-gray-300 hover:no-underline active:bg-neutral'


export const Sidebar = () => {
    return (
        <div className=" bg-gray-100  w-60 p-3 flex flex-col text-gray-700">
            <div className="flex-1 py-8 flex flex-col gap-0.5">{DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />

            ))}
            </div>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
        </div>
    )
};

function SidebarLink({ item }) {
    return (
        <Link to={item.path} className={linkClasses}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
