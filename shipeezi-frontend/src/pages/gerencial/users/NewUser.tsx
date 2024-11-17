import { useState } from "react";

import { BaseButton, Breadcrumbs, FormField, FormFieldSelect } from "../../../components";
import GerencialLayout from "../../../components/organisms/GerencialLayout";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { genderTypes } from "../../../enums";
import addressTypes from "../../../enums/address.type";

const NewUserBreadcumb = [
  {
    label: 'Users',
    link: '/users',
  },
  {
    label: 'New user',
    link: '#',
  },
]

function NewUserPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FieldValues>();
    
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('NewUserPage onSubmit', data);
  };

  return (
    <GerencialLayout>
      <div className="border-b">
        <Breadcrumbs items={NewUserBreadcumb} />
      </div>
      <div className="divide-y">
        <div className="grid grid-cols-3 py-8 gap-3">
          <div>
            <h3 className="font-semibold">Personal details</h3>
            <p className="text-slate-500">Information about the person, such as name, contact details, address, and other relevant personal information.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 grid grid-cols-2 gap-3">
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
          </form>
        </div>
        <div className="grid grid-cols-3 py-8 gap-3">
          <div>
            <h3 className="font-semibold">Addresses</h3>
            <p className="text-slate-500">All addresses that are linked to this person.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <FormField
                label="Address"
                name="address"
                placeholder="Enter the address here"
                register={register} />
            </div>
            <FormFieldSelect
              label="Address type"
              name="type"
              options={addressTypes}
              register={register} />
          </form>
        </div>
        <div className="flex py-4 items-center justify-end border-t">
          <div className="flex gap-3">
              <BaseButton label="Cancel" variant="text" click={() => null} />
              <BaseButton label="Create" click={() => null} loading={loading} />
          </div>
        </div>
      </div>
    </GerencialLayout>
  );
};

export default NewUserPage;