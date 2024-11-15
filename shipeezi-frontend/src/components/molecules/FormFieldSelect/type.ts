import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormFieldSelectPropTypes {
    label: string;
    name: string;
    rules?: RegisterOptions;
    register: UseFormRegister<FieldValues>;
}