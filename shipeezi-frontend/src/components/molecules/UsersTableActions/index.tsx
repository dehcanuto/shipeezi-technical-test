import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const UsersTableActions = ({ id }: { id: string }) => {
    const [show, setShow] = useState<boolean>(false);
    
    return (
        <div className="flex relative">
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="flex items-center justify-center p-2 bg-white text-green-500 font-bold border rounded">
                <BsThreeDots />
            </button>
            {show && (
                <div className="absolute top-full right-0 w-60 mt-2 bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">View</li>
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">Edit</li>
                        <li className="py-2 px-4 text-red-500 hover:bg-green-8% border-t cursor-pointer">Delete</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UsersTableActions;