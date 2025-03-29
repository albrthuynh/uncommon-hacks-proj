import Logo from "../../Logo/adversaCareLogo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <>
            <header>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" title="Akknoledge Careers" className="flex rounded">
                        <img
                        className="w-auto h-11"
                        src={Logo}
                        alt="AdversaCareLogo"
                        />
                    </Link>
                </div>

                {/* Right: Profile or Sign In/Up */}
                <div className="flex items-center space-x-4">
                    <>
                        <Link
                            to="/sign-in"
                            title="Login"
                            className="px-5 py-2 text-base font-light font-poppins text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/sign-up"
                            title="Sign Up"
                            className="px-5 py-2 text-base font-light font-poppins text-black bg-customGreen rounded-xl hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                        >
                            Sign Up
                        </Link>
                    </>
                </div>
            </header>
        </>
    )
};

export default NavigationBar;


