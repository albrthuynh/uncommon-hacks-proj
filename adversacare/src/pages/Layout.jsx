import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
      <div>  
        <NavigationBar/>
        <div>
          <Outlet />
        </div>
      </div>
    )
  };
  
  export default Layout;