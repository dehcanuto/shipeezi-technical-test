import { TodoCardPropsType } from "../../molecules/TodoCard/type";

export interface ViewTaskPropTypes {
    show: {
        view: boolean;
        data?: TodoCardPropsType
    };
    handleShow: () => void;
}