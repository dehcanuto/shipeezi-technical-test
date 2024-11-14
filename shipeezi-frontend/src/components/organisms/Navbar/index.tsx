import UserHeader from "../../molecules/UserHeader";

const Navbar = () => {
    return (
        <header className="flex p-2 bg-green-8%">
            <div className="flex container items-center justify-between mx-auto">
                <h1 className="text-2xl text-green-500 font-bold">CompanyHub</h1>
                <UserHeader />
            </div>
        </header>
    );
}

export default Navbar;