import InputMask from "react-input-mask";
import { FormFieldMaskedPropTypes } from "./type";

const FormFieldMasked = ({
        label,
        name,
        mask,
        placeholder,
        register,
        rules
    }: FormFieldMaskedPropTypes) => {
    return (
        <div>
            <label className="block text-green-600 text-sm font-semibold mb-1" htmlFor={name}>
                {label}
            </label>
            <InputMask
                mask={mask}
                className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                {...(register && register(name, rules))}
            >
            {(inputProps: any) => (
                <input
                    {...inputProps}
                    id={name}
                    placeholder={placeholder}
                    className="block w-full py-2 px-3 mt-1 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                />
            )}
            </InputMask>
        </div>
    );
}

export default FormFieldMasked;