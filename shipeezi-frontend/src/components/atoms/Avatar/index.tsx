import { getInitials } from "../../../misc";
import { BaseAvatarPropTypes } from "./type";

const BaseAvatar = ({ name, size }: BaseAvatarPropTypes) => {
    const sizeClasses = {
        base: 'w-8 h-8',
        large: 'w-10 h-10',
    };

    return (
        <span className={`flex items-center justify-center ${sizeClasses[size]} p-1 bg-green-500 text-white font-bold rounded`}>
            {getInitials(name)}
        </span>
    );
}

export default BaseAvatar;