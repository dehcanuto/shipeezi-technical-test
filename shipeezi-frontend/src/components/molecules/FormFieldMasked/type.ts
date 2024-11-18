import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormFieldMaskedPropTypes {
    label: string;
    name: string;
    placeholder: string;
    mask: string;
    rules?: RegisterOptions;
    register: UseFormRegister<FieldValues>;
}