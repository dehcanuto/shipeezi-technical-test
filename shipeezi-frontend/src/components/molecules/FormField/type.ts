import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormFieldPropTypes {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    rows?: number;
    rules?: RegisterOptions;
    register: UseFormRegister<FieldValues>;
}