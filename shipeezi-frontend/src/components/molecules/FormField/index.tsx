import { FormFieldPropTypes } from "./type";

const FormField = ({
        label,
        name,
        rows,
        type = "text",
        placeholder,
        register,
        rules
    }: FormFieldPropTypes) => {
    return (
        <div>
            <label className="block text-green-600 text-sm font-semibold mb-1" htmlFor={name}>
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={name}
                    rows={rows}
                    placeholder={placeholder}
                    className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                    {...(register && register(name, rules))}
                />
            ): (
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                    {...(register && register(name, rules))}
                />
            )}
        </div>
    );
}

export default FormField;