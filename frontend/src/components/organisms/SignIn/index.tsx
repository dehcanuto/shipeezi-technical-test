"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BaseButton } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { handleLogin } from "@/services/auth";
import { LoginCredentials } from "@/models/auth";

const SignIn = () => {
    const { register, handleSubmit } = useForm<FieldValues>();
    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await handleLogin(data as LoginCredentials)
            .then(res => {
                console.log('onSubmit then', res);
            })
            .catch(error => {
                console.error('onSubmit catch', error);
            })
            .finally(() => {

            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
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
            <BaseButton type="submit" label="Sign in" />
            <div className="flex gap-2">
                <p>Don&apos;t have an account?</p>
                <a href="#" className="text-green-500">Sign up</a>
            </div>
        </form>
    );
}

export default SignIn;