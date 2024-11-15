import { useEffect, useState } from "react";
import { GerencialLayout, UsersTable } from "../../../components";
import { handleListUsers } from "../../../services/users";
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
          <button type="button" className="px-4 bg-green-500 text-white rounded-lg">
            New User
          </button>
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