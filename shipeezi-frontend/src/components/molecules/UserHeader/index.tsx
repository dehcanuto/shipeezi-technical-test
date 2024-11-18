import { useEffect, useRef, useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import { getFirstName } from "../../../misc";
import { BaseAvatar } from "../../atoms";

interface UserInfosHeader {
    firstName: string;
    username: string;
    fullName: string;
}

const UserHeader = () => {
    const { user, logout } = useAuth();
    const [show, setShow] = useState<boolean>(false);
    const [userInfos, setUserInfos] = useState<UserInfosHeader>();
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setShow(!show)}>
                <BaseAvatar name={user?.fullName ?? 'SN' } size="large" />
            </button>
            {show && (
                <div ref={menuRef} className="absolute top-100 right-0 w-60 mt-2 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col py-6 divide-y gap-2">
                        <div className="flex py-2 px-4 gap-2">
                            <BaseAvatar name={user?.fullName ?? 'SN' } size="large" />
                            <div className="flex flex-col">
                                <span className="font-semibold">Hello, {userInfos?.firstName}!</span>
                                <p className="text-sm text-gray-500">@{userInfos?.username}</p>
                            </div>
                        </div>
                        <ul className="pt-2">
                            <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">
                                <button type="button">
                                    Profile
                                </button>
                            </li>
                            <li className="py-2 px-4 text-red-500 hover:bg-green-8% cursor-pointer">
                                <button type="button" onClick={logout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserHeader;