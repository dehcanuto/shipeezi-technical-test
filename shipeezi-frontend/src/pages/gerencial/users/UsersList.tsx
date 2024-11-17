import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UsersTable } from "../../../components";
import GerencialLayout from "../../../components/organisms/GerencialLayout";
import { handleListUsers } from "../../../hooks/users";
import { UsersListResponse } from "../../../models/user";

function UsersListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UsersListResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await handleListUsers()
        .then((res) => setUsers(res || []))
        .catch(error => {
            console.error('handleListUsers catch', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <GerencialLayout>
      <main className="flex flex-col gap-12">
        <div className="flex w-full justify-between">
          <h2 className="text-4xl font-semibold">
            User Management
          </h2>
          <Link
            to="/users/new"
            className="flex items-center px-4 bg-green-500 text-white rounded-lg">
            New User
          </Link>
        </div>
        <div className="">
          <UsersTable
            header={['User', 'Last update', 'added']}
            items={users}
            loading={loading}
          />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default UsersListPage;