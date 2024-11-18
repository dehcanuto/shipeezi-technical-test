import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { handleGetUser, handleUpdateUser } from "../../../hooks/users";
import GerencialLayout from "../../../components/organisms/GerencialLayout";
import { FormUser } from "../../../components";
import { UserUpdate } from "../../../models/user";

function UserDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const onSubmit: SubmitHandler<FieldValues|UserUpdate> = async (data) => {
    if (id) {
      setLoading(true);
      await handleUpdateUser(id, data)
        .then((res) => {
          console.log('onSubmit', res);
        })
        .catch(error => {
          console.error('onSubmit catch', error);
        })
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    async function getUserInfos(idUser: string) {
      setLoading(true);
      await handleGetUser(idUser)
        .then((res) => setUser(res))
        .catch(error => {
            console.error('handleListUsers catch', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (id) getUserInfos(id);
  }, [id]);
  
  return (
    <GerencialLayout>
      <FormUser
        userData={user}
        onSubmit={onSubmit}
        loading={loading}
      />
    </GerencialLayout>
  );
};

export default UserDetailsPage;