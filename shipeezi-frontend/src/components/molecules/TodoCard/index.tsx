import { BsChatLeftTextFill } from "react-icons/bs";

import { TodoCardPropsType } from "./type";
import { RenderTags } from "../../../misc/renderTags";
import { BaseAvatar } from "../../atoms";

const TodoCard = ({ title, tags, assignedTo, commentsCount, handleShow }: TodoCardPropsType) => {
    return (
            <div 
                onClick={handleShow}
                className="text-sm mt-2 hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
                <div className="flex flex-col p-3 bg-white rounded border-b border-grey gap-2">
                    <span className="text-sm font-bold">
                        {title}
                    </span>
                    <RenderTags tags={tags} />
                    <div className="flex justify-between items-center py-2">
                        <BaseAvatar name={assignedTo.fullName} size="base" />
                        <div className="flex items-center font-bold gap-2">
                            <BsChatLeftTextFill />
                            <span>{commentsCount}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TodoCard;