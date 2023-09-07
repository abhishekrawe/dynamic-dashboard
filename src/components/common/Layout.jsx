import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import Header from "./Header";
import { FaBars } from 'react-icons/fa';

function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleWindowResize);

        handleWindowResize();

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="flex flex-col bg-neutral-100 h-screen w-screen overflow-hidden">
            <Header />
            <div className="flex flex-row flex-1">
                <div className="md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-3xl p-4"
                    >
                        <FaBars />
                    </button>
                </div>
                {isSidebarOpen && <Sidebar />}
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
