import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import { getFirstName } from "../../../misc";
import { BaseAvatar } from "../../atoms";

interface UserInfosHeader {
    firstName: string;
    username: string;
    fullName: string;
}

const UserHeader = () => {
    const { user } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [userInfos, setUserInfos] = useState<UserInfosHeader>();

    useEffect(() => {
        if (user) {
            const firstName = getFirstName(user.fullName);
            setUserInfos({
                firstName: firstName,
                username: user.username,
                fullName: user.fullName,
            })
        }
    }, [user]);
    
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setShow(!show)}>
                <BaseAvatar name={user?.fullName ?? 'SN' } size="large" />
            </button>
            {show && (
                <div className="absolute top-100 right-0 w-60 mt-2 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col py-6 divide-y gap-2">
                        <div className="flex py-2 px-4 gap-2">
                            <BaseAvatar name={user?.fullName ?? 'SN' } size="large" />
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