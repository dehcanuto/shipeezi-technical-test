import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { handleGetUsers } from "../../../hooks/users";
import GerencialLayout from "../../../components/organisms/GerencialLayout";
import { FormUser } from "../../../components";

function UserDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    console.log('NewUserPage onSubmit', data);

    // await handleCreateUser(data)
    //   .then((res) => {
    //     if (res) navigate(`/user/${res.id}`);
    //   })
    //   .catch(error => {
    //       console.error('onSubmit catch', error);
    //   })
    //   .finally(() => setLoading(false));
  };

  useEffect(() => {
    async function getUserInfos(idUser: string) {
      await handleGetUsers(idUser)
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