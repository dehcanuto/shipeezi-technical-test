import { CgSpinner } from "react-icons/cg";

const Loading = () => {
    return (
        <div className="flex absolute inset-0 items-center justify-center bg-slate-100/80">
            <CgSpinner className="animate-spin text-3xl text-green-500" />
        </div>
    )
}

export default Loading;