"use client"

import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BaseButton } from "../../../components/atoms";
import { FormField } from "../../../components/molecules";
import { handleLogin } from "../../../services/auth";
import { LoginCredentials } from "../../../models/auth";
import { useState } from "react";

const SignIn = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit } = useForm<FieldValues>();
    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true);
        await handleLogin(data as LoginCredentials)
            .then(() => navigate("/dashboard"))
            .catch(error => console.error('onSubmit catch', error))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email address"
                register={register} />
            <FormField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                register={register} />
            <div className="flex items-center">
                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
            </div>
            <BaseButton type="submit" label="Sign in" loading={loading} />
            <div className="flex gap-2">
                <p>Don&apos;t have an account?</p>
                <a href="/signup" className="text-green-500">Sign up</a>
            </div>
        </form>
    );
}

export default SignIn;