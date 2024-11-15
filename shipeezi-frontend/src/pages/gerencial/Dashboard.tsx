import { useEffect, useState } from "react";
import { GerencialLayout } from "../../components";
import ToDoList from "../../components/organisms/ToDoList";
import { handleListTasks } from "../../services/tasks";

function DashboardPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await handleListTasks()
        .then((res) => {
          console.log('handleListTasks', res)
        })
        .catch(error => {
            console.error('handleListTasks catch', error);
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
            Dashboard
          </h2>
        </div>
        <div className="flex">
          <ToDoList title="Backlog Tasks" />
          <ToDoList title="To Do Tasks" />
          <ToDoList title="In Process" />
          <ToDoList title="Done" />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default DashboardPage;