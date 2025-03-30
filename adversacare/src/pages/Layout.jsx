import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar";

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