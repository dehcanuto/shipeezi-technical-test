import { useState } from "react";

import { BaseAvatar } from "../../atoms";
import { handleCreateComment } from "../../../hooks/comments";
import { Comments } from "../../../models/comments";
import { useAuth } from "../../../context/AuthContext";

const NewComment = ({ taskId, update }: { taskId: number; update: (data: Comments[]) => void }) => {
    const { user } = useAuth();
    const [message, setMessage] = useState<string>('');
    
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && message.trim()) {
            await handleCreateComment({
                comment: message.trim(),
                taskId: taskId
            })
            .then((res) => { 
                console.log('handleCreateComment', res);
                if (res) update(res)
            })
            .catch(error => console.error('onSubmit catch', error))
            .finally(() => {
                setMessage("");
            });
        }
    };

    return (
        <div className="flex gap-2">
            {user && (
                <div>
                    <BaseAvatar name={user.fullName} size="large" />
                </div>
            )}
            <input
                type="text"
                placeholder="Add a comment"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="block w-full py-2 px-3 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
            />
        </div>
    )
}

export default NewComment;