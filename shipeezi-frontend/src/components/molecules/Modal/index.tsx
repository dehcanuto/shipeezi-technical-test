import { MdClose } from "react-icons/md";

interface ModalPropTypes {
    title: string;
    show: boolean;
    handleShow: () => void;
    children: React.ReactNode;
}

const Modal = ({ title, show, handleShow, children }: ModalPropTypes) => {    
    return <>
        {show && (
            <div className="flex fixed inset-0 items-center justify-center bg-slate-900/30">
                <span onClick={handleShow} className="absolute inset-0" />
                <div className="relative p-4 min-w-96 bg-white rounded-lg">
                    <div className="flex p-2 items-center justify-between text-2xl border-b">
                        <h3>{title}</h3>
                        <button type="button" onClick={handleShow}>
                            <MdClose />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        )}
    </>
}

export default Modal;