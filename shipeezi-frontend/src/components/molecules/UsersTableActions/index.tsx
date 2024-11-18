import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import { BaseButton } from "../../atoms";
import { handleDeleteUser } from "../../../hooks/users";
import { useAlert } from "../../../context/AlertContext";

const UsersTableActions = ({ id }: { id: string }) => {
    const { showAlert } = useAlert();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);

    const handleDialog = () => {
        setShow(false);
        setShowConfirmDialog(true);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

    const deleteUser = async () => {
        setLoading(true);
        await handleDeleteUser(id)
            .then(() => showAlert("User deleted successfully!", "success"))
            .catch(error => showAlert(error, "error"))
            .finally(() => {
                setLoading(false);
                setShowConfirmDialog(false);
            });
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <div className="flex relative">
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="flex items-center justify-center p-2 bg-white text-green-500 font-bold border rounded">
                <BsThreeDots />
            </button>
            {show && (
                <div ref={menuRef} className="absolute top-full right-0 w-60 mt-2 bg-white rounded-lg shadow-lg z-30">
                    <ul className="py-2">
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">
                            <Link to={`/user/${id}`} className="flex">
                                View
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-green-8% cursor-pointer">Edit</li>
                        <li className="py-2 px-4 hover:bg-green-8% border-t cursor-pointer">
                            <button
                                type="button"
                                className="flex w-full text-red-500"
                                onClick={handleDialog}>
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            <Modal
                title="Delete user"
                show={showConfirmDialog}
                handleShow={() => setShowConfirmDialog(!showConfirmDialog)}>
                    <div className="py-4 px-2">
                        <p>Are you sure you want to delete this user?</p>
                        <p className="text-red-500">This action cannot be undone</p>
                    </div>
                    <div className="flex py-4 items-center justify-end border-t">
                        <div className="flex gap-3">
                            <BaseButton
                                label="No, keep it"
                                variant="text"
                                click={() => setShowConfirmDialog(false)}
                            />
                            <BaseButton
                                label="Yes, delete"
                                color="red"
                                click={deleteUser}
                                loading={loading}
                            />
                        </div>
                    </div>
            </Modal>
        </div>
    );
}

export default UsersTableActions;