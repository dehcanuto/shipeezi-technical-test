import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GerencialLayout from "../../../components/organisms/GerencialLayout";
import UsersTable from "../../../components/molecules/UsersTable";
import { handleListUsers } from "../../../hooks/users";
import { UsersListResponse } from "../../../models/user";
import { useAlert } from "../../../context/AlertContext";

function UsersListPage() {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(true);
  const [updateUsers, setUpdateUsers] = useState<boolean>(true);
  const [users, setUsers] = useState<UsersListResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await handleListUsers()
        .then((res) => setUsers(res || []))
        .catch(error => showAlert(error, "error"))
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateUsers]);

  return (
    <GerencialLayout>
      <main className="flex flex-col gap-12">
        <div className="flex w-full justify-between">
          <h2 className="text-4xl font-semibold">
            User Management
          </h2>
          <Link
            to="/user/new"
            className="flex items-center px-4 bg-green-500 text-white rounded-lg">
            New User
          </Link>
        </div>
        <div className="">
          <UsersTable
            header={['User', 'Last update', 'added']}
            items={users}
            loading={loading}
            updateUsers={() => setUpdateUsers(!updateUsers)}
          />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default UsersListPage;