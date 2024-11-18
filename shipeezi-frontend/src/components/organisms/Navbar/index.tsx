import { Link } from "react-router-dom";
import { BaseLogo, UserHeader } from "../../";

const Navbar = () => {
    return (
        <header className="flex p-2 bg-green-8%">
            <div className="flex items-center justify-between w-full px-6">
                <Link to="/dashboard">
                    <BaseLogo />
                </Link>
                <UserHeader />
            </div>
        </header>
    );
}

export default Navbar;