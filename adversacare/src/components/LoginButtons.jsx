
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const LoginButtons = () => {
    const {pathname} = useLocation();

    return (
        <>
            {(pathname == '/') && <div className="flex items-center space-x-4 mr-10">
                    <Link
                        to="/select-signup"
                        title="Login"
                        className="px-5 py-2 text-base font-light font-albertsans text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/select-signup"
                        title="Sign Up"

                        className="px-5 py-2 text-base font-light font-albertsans text-black bg-customGreen rounded-xl bg-blue-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                        Sign Up
                    </Link>
            </div>}
        </>
    )
}

export default LoginButtons