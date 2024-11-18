import { useState } from "react";

import { BaseAvatar } from "../../atoms";
import { handleCreateComment } from "../../../hooks/comments";
import { Comments } from "../../../models/comments";
import { useAuth } from "../../../context/AuthContext";
import { CgSpinner } from "react-icons/cg";
import { useAlert } from "../../../context/AlertContext";

const NewComment = ({ taskId, update }: { taskId: number; update: (data: Comments[]) => void }) => {
    const { user } = useAuth();
    const { showAlert } = useAlert();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && message.trim()) {
            setLoading(true);
            await handleCreateComment({
                comment: message.trim(),
                taskId: taskId
            })
            .then((res) => { 
                showAlert("Comment created successfully!", "success");
                if (res) update(res)
            })
            .catch(error => showAlert(error, "error"))
            .finally(() => {
                setLoading(false);
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
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Write a comment and press enter"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="block w-full py-2 px-3 bg-green-500/10 focus:outline-none rounded-md disabled:bg-gray-100"
                />
                {loading && <CgSpinner className="absolute top-1 right-2 animate-spin text-3xl text-green-500" />}
            </div>
        </div>
    )
}

export default NewComment;