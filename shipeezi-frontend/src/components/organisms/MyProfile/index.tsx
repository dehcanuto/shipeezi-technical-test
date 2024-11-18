import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FormFieldSelect } from "../..";
import { genderTypes } from "../../../enums";
import Modal from "../../molecules/Modal";
import FormField from "../../molecules/FormField";
import { MyProfilePropType } from "./type";
import { UserUpdate } from "../../../models/user";
import addressTypes from "../../../enums/address.type";
import { handleUpdateUser } from "../../../hooks/users";

const MyProfile = ({ user, show, handleShow }: MyProfilePropType) => {
    const { register, handleSubmit, reset } = useForm<FieldValues|UserUpdate>();
    const [active, setActive] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    
    const getLinkClass = (active: boolean) => {
        return active ? 
            'flex w-full p-2 px-4 font-semibold bg-green-8% text-green-700 rounded-lg cursor-pointer' : 
            'flex w-full p-2 px-4 hover:font-semibold hover:bg-green-8% hover:text-green-700 rounded-lg cursor-pointer';
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!data.password) delete data.password;

        setLoading(true);
        await handleUpdateUser(data.id, data)
            .then((res) => {
                console.log('onSubmit', res);
            })
            .catch(error => {
                console.error('onSubmit catch', error);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        reset(user);
    }, [user, reset]);

    return (
        <Modal
            title="Profile"
            show={show}
            handleShow={handleShow}
            submitLabel="Save"
            action={handleSubmit(onSubmit)}
            loading={loading}
            viewAction>
                <div className="flex min-h-96 divide-x gap-3">
                    <div className="py-4">
                        <ul className="flex min-w-60 flex-col gap-1">
                            <li className="flex w-full">
                                <button 
                                    type="button"
                                    onClick={() => setActive(0)}
                                    className={getLinkClass(active === 0)}>
                                    Personal details
                                </button>
                            </li>
                            <li className="flex w-full">
                                <button
                                    type="button"
                                    onClick={() => setActive(1)}
                                    className={getLinkClass(active === 1)}>
                                    Addresses
                                </button>
                            </li>
                            <li className="flex w-full">
                                <button
                                    type="button"
                                    onClick={() => setActive(2)}
                                    className={getLinkClass(active === 2)}>
                                    Account password
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form className="p-4 min-w-96">
                        {active === 0 && (
                            <div className="grid grid-cols-2 gap-3">
                                <FormField
                                    label="Full name"
                                    name="fullName"
                                    placeholder="Please enter the full name"
                                    register={register} />
                                <FormField
                                    label="Username"
                                    name="username"
                                    placeholder="@"
                                    register={register} />
                                <FormField
                                    label="Birth date"
                                    name="birthdate"
                                    placeholder="dd/mm/yyyy"
                                    register={register} />
                                <FormFieldSelect
                                    label="Gender"
                                    name="gender"
                                    options={genderTypes}
                                    register={register} />
                                <FormField
                                    label="Email"
                                    name="email"
                                    placeholder="Please enter the email"
                                    register={register} />
                                <FormField
                                    label="Phone number"
                                    name="phone"
                                    placeholder="000 000 0000"
                                    register={register} />

                            </div>
                        )}
                        {active === 1 && (
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                    <FormField
                                        label="Address"
                                        name="address"
                                        placeholder="Enter the address here"
                                        register={register} />
                                </div>
                                <FormFieldSelect
                                    label="Address type"
                                    name="address_type"
                                    options={addressTypes}
                                    register={register} />
                            </div>
                        )}
                        {active === 2 && (
                            <div className="grid grid-cols-1 gap-3">
                                <FormField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    register={register} />
                            </div>
                        )}
                    </form>
                </div>
        </Modal>
    )
}

export default MyProfile;