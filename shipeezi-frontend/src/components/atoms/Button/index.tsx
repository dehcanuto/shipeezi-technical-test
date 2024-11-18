import { BaseButtonPropTypes } from "./type";

const BaseButton = ({
    label,
    type = "button",
    variant = "default",
    color = "green",
    click,
    loading = false
    }: BaseButtonPropTypes) => {

    const colorClassDefault = color === "green" ? 
        "bg-green-500 hover:bg-green-400 active:bg-green-400" :
        "bg-red-500 hover:bg-red-400 active:bg-red-400";

    const variantClass = {
        default: `${colorClassDefault} text-white border border-transparent`,
        outlined: `bg-transparent text-${color}-500 border border-${color}-500 hover:bg-${color}-400 active:bg-${color}-400`,
        text: "bg-transparent text-black"
    };

    const handleClick = () => {
        if (click) click();
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`flex items-center justify-center w-full px-4 py-2 text-nowrap ${variantClass[variant]} rounded-md font-semibold capitalize focus:outline-none disabled:opacity-25 transition`}
            disabled={loading}>
            {loading ? 'Sending...' : label}
        </button>
    );
}

export default BaseButton;