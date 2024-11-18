
import { formatDateComment } from "../../../misc";
import { BaseAvatar } from "../../atoms";
import { CommentCardPropTypes } from "./type";

const CommentCard = ({ name, comment, date }: CommentCardPropTypes) => {

    return (
        <div className="flex items-center gap-3">
            <div>
                <BaseAvatar name={name} size="large" />
            </div>
            <div className="w-full text-sm">
                <div className="flex flex-row items-center justify-between gap-2">
                    <span className="font-semibold truncate w-28">{name}</span>
                    <span className="text-xs text-slate-400">
                        {formatDateComment(date)}
                    </span>
                </div>
                <p className="text-slate-600">
                    {comment}
                </p>
            </div>
        </div>
    );
}

export default CommentCard;