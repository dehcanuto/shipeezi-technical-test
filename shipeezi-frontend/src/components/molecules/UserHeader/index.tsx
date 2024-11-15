import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import { getFirstName, getInitials } from "../../../misc/format";

interface UserInfosHeader {
    initials: string;
    firstName: string;
    username: string;
}

const UserHeader = () => {
    const { user } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [userInfos, setUserInfos] = useState<UserInfosHeader>();

    useEffect(() => {
        if (user) {
            const initials = getInitials(user.fullName);
            const firstName = getFirstName(user.fullName);
            setUserInfos({
                initials: initials,
                firstName: firstName,
                username: user.username,
            })
        }
    }, [user]);
    
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="p-2 bg-green-500 text-white font-bold rounded">
                    {userInfos?.initials}
            </button>
            {show && (
                <div className="absolute top-100 right-0 w-60 mt-2 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col py-6 divide-y gap-2">
                        <div className="flex py-2 px-4 gap-2">
                            <span className="p-2 bg-green-500 text-white font-bold rounded">
                                {userInfos?.initials}
                            </span>
                            <div className="flex flex-col">
                                <span className="font-semibold">Hello, {userInfos?.firstName}!</span>
                                <p className="text-sm text-gray-500">@{userInfos?.username}</p>
                            </div>
                        </div>
                        <ul className="pt-2">
                            <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">Profile</li>
                            <li className="py-2 px-4 text-red-500 hover:bg-green-8% cursor-pointer">Logout</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserHeader;