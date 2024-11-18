import { TodoCardPropsType } from "../../molecules/TodoCard/type";

export interface ToDoListPropTypes {
    title: string;
    tasks: TodoCardPropsType[];
    updateTasks: () => void;
    loading: boolean;
}