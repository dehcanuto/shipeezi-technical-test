import { useState } from "react";
import { BaseAvatar } from "../../atoms";

const NewComment = ({ taskId }: { taskId: number }) => {
    const [message, setMessage] = useState<string>('');
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && message.trim()) {
            console.log('envia comentário', message.trim(), taskId);
            setMessage("");
        }
    };

    return (
        <div className="flex gap-2">
            <div>
                <BaseAvatar name="Name User" size="large" />
            </div>
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