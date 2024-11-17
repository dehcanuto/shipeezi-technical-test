import { Key } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";

import { TodoCardPropsType } from "./type";
import { tagsTasks } from "../../../enums";
import { TagsTasksPropTypes } from "../../../enums/tags.tasks";
import { getInitials } from "../../../misc/format";

const TodoCard = ({ title, tags, assignedTo, commentsCount }: TodoCardPropsType) => {
    const renderTags = JSON.parse(tags).map((tagId: number) =>
        tagsTasks.find((tag) => tag.value === tagId)
    );
    
    return (
            <div className="text-sm mt-2">
                <div className="flex flex-col p-3 bg-white rounded border-b border-grey gap-2">
                    <span className="text-sm font-bold">
                        {title}
                    </span>
                    <div className="flex gap-1">
                        {renderTags.map((tag: TagsTasksPropTypes, index: Key) =>
                            tag && (
                                <span
                                    key={index}
                                    className="px-2 bg-[#7B00FF]/10 text-[#7B00FF] rounded"
                                    style={{
                                        color: tag.color,
                                        backgroundColor: tag.color + '33',
                                    }}>
                                    {tag.label}
                                </span>
                            )
                        )}
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="p-1 bg-green-500 text-white font-bold border-2 border-white rounded">
                            {getInitials(assignedTo.fullName)}
                        </span>
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