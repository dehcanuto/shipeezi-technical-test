import { MdClose } from "react-icons/md";
import { BaseButton } from "../..";

interface ModalPropTypes {
    title: string;
    show: boolean;
    viewAction?: boolean;
    submitLabel?: string;
    action?: () => void;
    handleShow: () => void;
    children: React.ReactNode;
    loading?: boolean;
}

const Modal = ({
    title,
    show,
    action,
    handleShow,
    children,
    submitLabel = "Create",
    viewAction = false,
    loading = false
    }: ModalPropTypes) => {    
    return <>
        {show && (
            <div className="flex fixed inset-0 items-center justify-center bg-slate-900/30 z-50">
                <span onClick={handleShow} className="absolute inset-0" />
                <div className="relative min-w-96 bg-white rounded-lg">
                    <div className="flex p-3 mx-3 items-center justify-between text-2xl border-b">
                        <h3>{title}</h3>
                        <button type="button" onClick={handleShow}>
                            <MdClose />
                        </button>
                    </div>
                    <div className="px-3">
                        {children}
                    </div>
                    {viewAction && (
                        <div className="flex py-4 px-8 items-center justify-end border-t">
                            <div className="flex gap-3">
                                <BaseButton label="Cancel" variant="text" click={handleShow} />
                                <BaseButton label={submitLabel} click={action} loading={loading} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}
    </>
}

export default Modal;