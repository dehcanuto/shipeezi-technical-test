import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return location.pathname === path ? 
            'p-2 px-4 font-semibold bg-green-8% text-green-700 rounded-lg cursor-pointer' : 
            'p-2 px-4 hover:font-semibold hover:bg-green-8% hover:text-green-700 rounded-lg cursor-pointer';
    };

    return (
        <aside className="flex flex-col w-80 py-4 px-8 bg-white">
            <ul className="flex flex-col gap-1">
                <li className={getLinkClass('/dashboard')}>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className={getLinkClass('/users')}>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;