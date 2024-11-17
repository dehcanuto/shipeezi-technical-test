import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormFieldSelectOptionsPropTypes {
    label: string;
    value: string | number;
}

export interface FormFieldSelectPropTypes {
    label: string;
    name: string;
    options: FormFieldSelectOptionsPropTypes[];
    rules?: RegisterOptions;
    register: UseFormRegister<FieldValues>;
}