import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { handleGetUser, handleUpdateUser } from "../../../hooks/users";
import GerencialLayout from "../../../components/organisms/GerencialLayout";
import Breadcrumbs from "../../../components/molecules/Breadcrumbs";
import FormUser from "../../../components/organisms/FormUser";
import { UserUpdate } from "../../../models/user";
import { useAlert } from "../../../context/AlertContext";

function UserDetailsPage() {
  const { id } = useParams();
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const onSubmit: SubmitHandler<FieldValues|UserUpdate> = async (data) => {
    if (id) {
      setLoading(true);
      await handleUpdateUser(id, data)
        .then(() => showAlert("User edited successfully!", "success"))
        .catch(error => showAlert(error, "error"))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    async function getUserInfos(idUser: string) {
      setLoading(true);
      await handleGetUser(idUser)
        .then((res) => setUser(res))
        .catch(error => showAlert(error, "error"))
        .finally(() => {
          setLoading(false);
        });
    }
    if (id) getUserInfos(id);
  }, [id]);
  
  return (
    <GerencialLayout>
      <div className="border-b">
        <Breadcrumbs items={[
          {
            label: 'Users',
            link: '/users',
          },
          {
            label: user ? user.fullName : '...',
            link: '#',
          }
        ]} />
      </div>
      <FormUser
        userData={user}
        onSubmit={onSubmit}
        loading={loading}
      />
    </GerencialLayout>
  );
};

export default UserDetailsPage;