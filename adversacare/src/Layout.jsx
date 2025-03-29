import { Outlet } from "react-router-dom";
import NavigationBar from "./components/Navbar/Navbar"

function Layout() {
    return (
        <div>
            <NavigationBar />
            <div className="min-h-screen">
                <Outlet />
            </div>  
        </div>
    )
};

export default Layout;