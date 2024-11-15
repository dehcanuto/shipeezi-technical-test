import { GerencialLayout, UsersTable } from "../../../components";

function UsersListPage() {
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
            items={[{
              name: 'Evelyn Harper',
              username: 'evelynh',
              lastUpdate: '16/08/2023',
              added: '16/08/2013'
            }]}
          />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default UsersListPage;