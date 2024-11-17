import { Key, useState } from "react";
import { BsFillPlusCircleFill, BsThreeDots } from "react-icons/bs";

import { ToDoListPropTypes } from "./type";
import { TodoCardPropsType } from "../../molecules/TodoCard/type";

import { TodoCard } from "../../molecules";
import FormNewTask from "../FormNewTask";
import ViewTask from "../ViewTask";

const ToDoList = ({ title, tasks }: ToDoListPropTypes) => {    
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showTask, setShowTask] = useState<{
        view: boolean;
        data?: TodoCardPropsType
    }>({
        view: false,
        data: undefined
    });

    return (
        <div>
            <div className="rounded bg-grey-light w-64 p-2">
                <div className="flex justify-between py-1">
                    <h3 className="text-sm font-semibold">
                        {title}
                    </h3>
                    <button type="button" className="text-slate-400">
                        <BsThreeDots />
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    {tasks.map((task: TodoCardPropsType, key: Key) => 
                        <TodoCard
                            key={key}
                            handleShow={() =>
                                setShowTask({
                                    data: task,
                                    view: true
                                })
                            }
                            {...task}
                        />
                    )}
                    <button
                        type="button"
                        onClick={() => setShowForm(true)}
                        className="flex p-2 items-center justify-center bg-white text-slate-300 border-b border-grey hover:bg-grey-lighter cursor-pointer rounded">
                        <BsFillPlusCircleFill />
                    </button>
                </div>
            </div>
            <FormNewTask
                show={showForm}
                handleShow={() => setShowForm(!showForm)}
            />
            <ViewTask 
                show={showTask}
                handleShow={() => setShowTask({
                    ...showTask,
                    view: !showTask
                })} />
        </div>
    );
}

export default ToDoList;