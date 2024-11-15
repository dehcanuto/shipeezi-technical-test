import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

import { FormField, FormFieldSelect, Modal } from "../../molecules";

interface ModalPropTypes {
    show: boolean;
    handleShow: () => void;
}

const FormNewTask = ({ show, handleShow }: ModalPropTypes) => {
    const { register, handleSubmit } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log('onSubmit', data);
    }
    
    return (
        <Modal title="New task" show={show} handleShow={() => handleShow()}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex divide-x gap-3">
                <div className="flex flex-col min-w-96 p-2 gap-3">
                    <FormField
                        label="Task name"
                        name="title"
                        placeholder="Type here a task name"
                        register={register}
                    />
                    <FormField
                        label="Description"
                        name="description"
                        placeholder="Please, insert a task description"
                        register={register}
                    />
                </div>
                <div className="flex flex-col min-w-60 p-4 gap-4">
                    <h4>Basic information</h4>
                    <div className="flex flex-col gap-3">
                        <FormFieldSelect
                            label="Status"
                            name="title"
                            register={register}
                        />
                        <FormFieldSelect
                            label="Tags"
                            name="description"
                            register={register}
                        />
                        <FormFieldSelect
                            label="Assignee"
                            name="description"
                            register={register}
                        />
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default FormNewTask;