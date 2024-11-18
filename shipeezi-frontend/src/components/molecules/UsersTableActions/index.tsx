import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { handleDeleteUser } from "../../../hooks/users";

const UsersTableActions = ({ id }: { id: string }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState<boolean>(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <div className="flex relative">
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="flex items-center justify-center p-2 bg-white text-green-500 font-bold border rounded">
                <BsThreeDots />
            </button>
            {show && (
                <div ref={menuRef} className="absolute top-full right-0 w-60 mt-2 bg-white rounded-lg shadow-lg z-30">
                    <ul className="py-2">
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">
                            <Link to={`/user/${id}`} className="flex">
                                View
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">Edit</li>
                        <li className="py-2 px-4 hover:bg-green-8% border-t cursor-pointer">
                            <button
                                type="button"
                                className="flex text-red-500"
                                onClick={() => handleDeleteUser(id)}>
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UsersTableActions;