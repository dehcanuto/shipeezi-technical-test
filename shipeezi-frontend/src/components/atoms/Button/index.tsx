import { BaseButtonPropTypes } from "./type";

const BaseButton = ({
    label,
    type = "button",
    variant = "default",
    click,
    loading = false
    }: BaseButtonPropTypes) => {
    const variantClass = {
        default: "bg-green-500 text-white border border-transparent hover:bg-green-400 active:bg-green-400",
        outlined: "bg-transparent text-green-500 border border-green-500 hover:bg-green-400 active:bg-green-400",
        text: "bg-transparent text-black"
    };

    const handleClick = () => {
        if (click) click();
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`w-full inline-flex items-center justify-center px-4 py-2 ${variantClass[variant]} rounded-md font-semibold capitalize focus:outline-none disabled:opacity-25 transition`}
            disabled={loading}>
            {loading ? 'Sending...' : label}
        </button>
    );
}

export default BaseButton;