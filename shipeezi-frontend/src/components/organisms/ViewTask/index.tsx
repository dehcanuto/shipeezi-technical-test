import { useEffect } from "react";

import { ViewTaskPropTypes } from "./type";
import { RenderTags, formatDate, getStatusName } from "../../../misc";
import { CommentCard, Modal, NewComment } from "../..";

const ViewTask = ({ show, handleShow }: ViewTaskPropTypes) => {

    useEffect(() => {
        console.log('useEffect', show);
    }, [show]);
    
    return <>
            {show.data && (
                <Modal
                    title={show.data.title}
                    show={show.view}
                    handleShow={() => handleShow()}>
                    <div className="flex divide-x gap-3">
                        <div className="flex flex-col min-w-96 justify-between divide-y p-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <span className="block text-green-600 text-sm font-semibold">
                                    Description
                                </span>
                                <div className="text-sm text-slate-500">
                                    {show.data.description}
                                </div>
                            </div>
                            <div className="flex flex-col py-3 gap-5">
                                <NewComment taskId={show.data.id} />
                                <div className="">
                                    <CommentCard
                                        name="Fulano Tal"
                                        comment="Please, check my design file on this link."
                                        date="August 28, 2024 at 10:10 AM" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-72 divide-y p-4 gap-4">
                            <div>
                                <h4>Basic information</h4>
                                <div className="flex flex-col gap-3 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Status
                                        </span>
                                        <div className="text-sm text-slate-500">
                                            {getStatusName(show.data.status)}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Tags
                                        </span>
                                        <RenderTags tags={show.data.tags} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Assignee
                                        </span>
                                        <div className="text-sm text-slate-500">
                                            {show.data.assignedTo.fullName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4">
                                <h4>Details</h4>
                                <div className="flex flex-col gap-3 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Created by
                                        </span>
                                        <div className="text-sm text-slate-500">
                                            {show.data.assignedTo.fullName}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Creation date
                                        </span>
                                        <div className="text-sm text-slate-500">
                                            {formatDate(show.data.createdAt)}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="block text-green-600 text-sm font-semibold">
                                            Story Points
                                        </span>
                                        <div className="text-sm text-slate-500">
                                            {show.data.storyPoints}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
}

export default ViewTask;