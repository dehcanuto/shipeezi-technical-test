import { BaseButtonPropTypes } from "./type";

const BaseButton = ({ label, type = "button" }: BaseButtonPropTypes) => {
    return (
        <button
            type={type}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-400 active:bg-green-400 focus:outline-none disabled:opacity-25 transition">
            {label}
        </button>
    );
}

export default BaseButton;