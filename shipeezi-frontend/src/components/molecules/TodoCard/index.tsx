import { BsChatLeftTextFill } from "react-icons/bs";

const TodoCard = () => {    
    return (
            <div className="text-sm mt-2">
                <div className="flex flex-col p-3 bg-white rounded border-b border-grey gap-2">
                    <span className="text-sm font-bold">
                        Model Answer
                    </span>
                    <div className="flex gap-2">
                        <span className="px-2 bg-[#7B00FF]/10 text-[#7B00FF] rounded">
                            Dev
                        </span>
                        <span className="px-2 bg-[#0059FF]/10 text-[#0059FF] rounded">
                            Design
                        </span>
                        <span className="px-2 bg-[#306f32]/10 text-[#306f32] rounded">
                            Test
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex -space-x-4 overflow-hidden">
                            <span className="p-1 bg-green-500 text-white font-bold border-2 border-white rounded">
                                MM
                            </span>
                            <span className="p-1 bg-green-500 text-white font-bold border-2 border-white rounded">
                                MM
                            </span>
                            <span className="p-1 bg-green-500 text-white font-bold border-2 border-white rounded">
                                MM
                            </span>
                        </div>
                        <div className="flex items-center font-bold gap-2">
                            <BsChatLeftTextFill />
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TodoCard;