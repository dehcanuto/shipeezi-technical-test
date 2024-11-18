import { FieldValues, SubmitHandler } from "react-hook-form";

export interface FormUserPropsType {
    userData?: any;
    loading: boolean;
    onSubmit: SubmitHandler<FieldValues>
}