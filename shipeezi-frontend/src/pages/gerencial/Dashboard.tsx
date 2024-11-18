import { useEffect, useState } from "react";

import { handleListTasks } from "../../hooks/tasks";

import GerencialLayout from "../../components/organisms/GerencialLayout";

import { TodoCardPropsType } from "../../components/molecules/TodoCard/type";
import ToDoList from "../../components/organisms/ToDoList";
import { useAlert } from "../../context/AlertContext";

function DashboardPage() {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(true);
  const [updateTasks, setUpdateTasks] = useState<boolean>(true);

  const [backlogTasks, setBacklogTasks] = useState<TodoCardPropsType[]>([]);
  const [todoTasks, setTodoTasks] = useState<TodoCardPropsType[]>([]);
  const [processTasks, setProcessTasks] = useState<TodoCardPropsType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TodoCardPropsType[]>([]);

  useEffect(() => {
    const handleUpdateTasks = async () => {
      await handleListTasks()
        .then((tasks) => {
          if (tasks) {
            setBacklogTasks(tasks.filter(task => task.status === 0));
            setTodoTasks(tasks.filter(task => task.status === 1));
            setProcessTasks(tasks.filter(task => task.status === 2));
            setDoneTasks(tasks.filter(task => task.status === 3));
          }
        })
        .catch(error => showAlert(error, "error"))
        .finally(() => {
          setLoading(false);
        });
    };

    handleUpdateTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTasks]);

  return (
    <GerencialLayout>
      <main className="flex flex-col gap-12">
        <div className="flex w-full justify-between">
          <h2 className="text-4xl font-semibold">
            Dashboard
          </h2>
        </div>
        <div className="flex">
          <ToDoList
            title="Backlog Tasks"
            status={0}
            tasks={backlogTasks}
            updateTasks={() => setUpdateTasks(!updateTasks)}
            loading={loading} />
          <ToDoList
            title="To Do Tasks"
            status={1}
            tasks={todoTasks}
            updateTasks={() => setUpdateTasks(!updateTasks)}
            loading={loading} />
          <ToDoList
            title="In Process"
            status={2}
            tasks={processTasks}
            updateTasks={() => setUpdateTasks(!updateTasks)}
            loading={loading} />
          <ToDoList
            title="Done"
            status={3}
            tasks={doneTasks}
            updateTasks={() => setUpdateTasks(!updateTasks)}
            loading={loading} />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default DashboardPage;