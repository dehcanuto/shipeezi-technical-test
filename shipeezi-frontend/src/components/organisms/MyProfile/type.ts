import { UserUpdate } from "../../../models/user";

export interface MyProfilePropType {
    user: UserUpdate;
    show: boolean;
    handleShow: () => void;
}