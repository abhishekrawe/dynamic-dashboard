import React from "react";
import { Outlet } from 'react-router-dom';

function Layout() {
    return <div>
        <div className="bg-sky-200">sidebar</div>
        <div className="bg-green-200">header</div>
        <div>
            {<Outlet/>}
        </div>
    </div>;
}

export default Layout;
