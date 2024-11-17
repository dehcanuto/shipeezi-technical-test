
import { BaseAvatar } from "../../atoms";
import { CommentCardPropTypes } from "./type";

const CommentCard = ({ name, comment, date }: CommentCardPropTypes) => {

    return (
        <div className="flex items-center gap-3">
            <BaseAvatar name={name} size="large" />
            <div className="text-sm">
                <div className="flex gap-2">
                    <span>{name}</span>
                    <span className="text-slate-400">
                        {date}
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