import React from "react";
import { Outlet } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import Header from "./Header";

function Layout() {
    return <div className="flex flex-col bg-neutral-100 h-screen w-screen overflow-hidden">
        <Header />
        <div className="flex flex-row flex-1">
        <Sidebar/>
        <div className="flex-1 p-4">
            {<Outlet/>}
        </div>
        </div>
    </div>;
}

export default Layout;
