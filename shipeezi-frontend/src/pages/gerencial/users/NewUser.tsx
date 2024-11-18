import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";

import GerencialLayout from "../../../components/organisms/GerencialLayout";
import Breadcrumbs from "../../../components/molecules/Breadcrumbs";
import FormUser from "../../../components/organisms/FormUser";
import { handleCreateUser } from "../../../hooks/users";
import { useAlert } from "../../../context/AlertContext";

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
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);
    
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    await handleCreateUser(data)
      .then((res) => {
        showAlert("User created successfully!", "success")
        if (res) navigate(`/user/${res.id}`);
      })
      .catch(error => {
          console.error('onSubmit catch', error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <GerencialLayout>
      <div className="border-b">
        <Breadcrumbs items={NewUserBreadcumb} />
      </div>
      <FormUser
        onSubmit={onSubmit}
        loading={loading}
      />
    </GerencialLayout>
  );
};

export default NewUserPage;