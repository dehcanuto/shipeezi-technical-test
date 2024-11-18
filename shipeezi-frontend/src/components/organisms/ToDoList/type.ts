import { TodoCardPropsType } from "../../molecules/TodoCard/type";

export interface ToDoListPropTypes {
    title: string;
    status: number;
    tasks: TodoCardPropsType[];
    updateTasks: () => void;
    loading: boolean;
}