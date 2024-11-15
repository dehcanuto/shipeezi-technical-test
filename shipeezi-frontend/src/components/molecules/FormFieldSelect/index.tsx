import { FormFieldSelectPropTypes } from "./type";

const FormFieldSelect = ({
        label,
        name,
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
                className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                {...(register && register(name, rules))}>
                <option>teste</option>
            </select>
        </div>
    );
}

export default FormFieldSelect;