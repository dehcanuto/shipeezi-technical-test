import { BsFillPlusCircleFill, BsThreeDots } from "react-icons/bs";

import { TodoCard } from "../../molecules";
import { ToDoListPropTypes } from "./type";

const ToDoList = ({ title }: ToDoListPropTypes) => {    
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
                <div className="flex flex-col gap-4">
                    <TodoCard />
                    <div className="flex p-2 items-center justify-center bg-white text-slate-300 border-b border-grey hover:bg-grey-lighter cursor-pointer rounded">
                        <BsFillPlusCircleFill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;