
import { formatDateComment } from "../../../misc";
import { BaseAvatar } from "../../atoms";
import { CommentCardPropTypes } from "./type";

const CommentCard = ({ name, comment, date }: CommentCardPropTypes) => {

    return (
        <div className="flex items-center gap-3">
            <BaseAvatar name={name} size="large" />
            <div className="text-sm">
                <div className="flex gap-2">
                    <span className="font-semibold">{name}</span>
                    <span className="text-slate-400">
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