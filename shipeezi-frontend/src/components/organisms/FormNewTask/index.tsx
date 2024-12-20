import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { handleListUsers } from "../../../hooks/users";
import { handleCreateTask } from "../../../hooks/tasks";

import { statusTasks, tagsTasks } from "../../../enums";
import { TagsTasksPropTypes } from "../../../enums/tags.tasks";

import Modal from "../../molecules/Modal";
import { FormFieldSelect, FormFieldTagSelect } from "../../molecules";
import FormField from "../../molecules/FormField";
import { FormFieldSelectOptionsPropTypes } from "../../molecules/FormFieldSelect/type";
import { FormNewTaskPropsType } from "./type";
import { useAlert } from "../../../context/AlertContext";

const FormNewTask = ({ status, show, handleShow, done }: FormNewTaskPropsType) => {
    const { showAlert } = useAlert();
    const { register, handleSubmit, reset } = useForm<FieldValues>();
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<TagsTasksPropTypes[]>([]);
    const [usersToAssignee, setUsersToAssignee] = useState<FormFieldSelectOptionsPropTypes[]>([]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true);

        data.tags = selectedTags.map(tag => tag.value);

        await handleCreateTask(data)
            .then(() => {
                showAlert("Task created successfully!", "success");
                done();
                reset();
                handleShow();
            })
            .catch(error => showAlert(error, "error"))
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        reset({ status: status });
        const fetchData = async () => {
          await handleListUsers()
            .then((res) => {
                if (res) {
                    const mappedUsers = res.map((user) => ({
                        label: user.fullName,
                        value: user.id,
                    }));
                    setUsersToAssignee(mappedUsers);
                }
            })
            .catch(error => showAlert(error, "error"))
        };
    
        fetchData();
    }, [reset, status, showAlert]);
    
    return (
        <Modal
            title="New task"
            show={show}
            action={handleSubmit(onSubmit)}
            handleShow={() => handleShow()}
            loading={loading}
            viewAction>
            <form onSubmit={handleSubmit(onSubmit)} className="flex divide-x gap-3">
                <div className="flex flex-col w-96 p-2 gap-3">
                    <FormField
                        label="Task name"
                        name="title"
                        placeholder="Type here a task name"
                        register={register}
                    />
                    <FormField
                        type="textarea"
                        rows={16}
                        label="Description"
                        name="description"
                        placeholder="Please, insert a task description"
                        register={register}
                    />
                </div>
                <div className="flex flex-col min-w-72 p-4 gap-4">
                    <h4>Basic information</h4>
                    <div className="flex flex-col gap-3">
                        <FormFieldSelect
                            label="Status"
                            name="status"
                            options={statusTasks}
                            register={register}
                        />
                        <FormFieldTagSelect
                            label="Tags"
                            tags={tagsTasks}
                            selectedTags={selectedTags}
                            onChange={(tags) => setSelectedTags(tags)}
                        />
                        <FormFieldSelect
                            label="Assignee"
                            name="assignee"
                            options={usersToAssignee}
                            register={register}
                        />
                        <FormField
                            type="number"
                            label="Story Points"
                            name="storyPoints"
                            placeholder="Type here a task story points"
                            register={register}
                        />
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default FormNewTask;