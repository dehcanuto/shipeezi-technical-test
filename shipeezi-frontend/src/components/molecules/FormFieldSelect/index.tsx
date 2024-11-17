import { FormFieldSelectPropTypes } from "./type";

const FormFieldSelect = ({
        label,
        name,
        options,
        register,
        rules
    }: FormFieldSelectPropTypes) => {
    return (
        <div>
            <label className="block text-green-600 text-sm font-semibold mb-1" htmlFor={name}>
                {label}
            </label>
            <select 
                id={name}
                className="block w-full h-10 py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                {...(register && register(name, rules))}>
                {options.map((item, key) => (
                    <option key={key} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FormFieldSelect;