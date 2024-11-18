import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormUserPropsType } from "./type";

import { BaseButton, Loading } from "../../atoms";
import { FormFieldSelect } from "../../molecules";
import FormField from "../../molecules/FormField";

import { genderTypes } from "../../../enums";
import addressTypes from "../../../enums/address.type";
import { UserUpdate } from "../../../models/user";

const FormUser = ({ userData, onSubmit, loading }: FormUserPropsType) => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<FieldValues|UserUpdate>();

    useEffect(() => {
        if (userData) reset(userData);
    }, [userData, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="divide-y">
            <div className="grid grid-cols-3 py-8 gap-3">
                <div>
                    <h3 className="font-semibold">Personal details</h3>
                    <p className="text-slate-500">Information about the person, such as name, contact details, address, and other relevant personal information.</p>
                </div>
                <div className="relative col-span-2 grid grid-cols-2 gap-3">
                    {loading && <Loading />}
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
                        label="Email"
                        name="email"
                        placeholder="Please enter the email"
                        register={register} />
                    {!userData && (
                        <FormField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            register={register} />
                    )}
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
                        label="Phone number"
                        name="phone"
                        placeholder="000 000 0000"
                        register={register} />
                </div>
            </div>
            <div className="grid grid-cols-3 py-8 gap-3">
                <div>
                    <h3 className="font-semibold">Addresses</h3>
                    <p className="text-slate-500">All addresses that are linked to this person.</p>
                </div>
                <div className="relative col-span-2 grid grid-cols-3 gap-3">
                    {loading && <Loading />}
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
            </div>
            <div className="flex py-4 items-center justify-end border-t">
                <div className="flex gap-3">
                    <BaseButton
                        label="Cancel"
                        variant="text"
                        click={() => navigate("/users")} />
                    <BaseButton
                        label={userData ? 'Save' : 'Create'}
                        type="submit"
                        loading={loading} />
                </div>
            </div>
        </form>
    )
}

export default FormUser;