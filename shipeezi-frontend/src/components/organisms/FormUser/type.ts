import { FieldValues, SubmitHandler } from "react-hook-form";
import { UserUpdate } from "../../../models/user";

export interface FormUserPropsType {
    userData?: any;
    loading: boolean;
    onSubmit: SubmitHandler<FieldValues|UserUpdate>
}