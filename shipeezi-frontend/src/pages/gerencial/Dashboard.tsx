import { useEffect, useState } from "react";

import { handleListTasks } from "../../hooks/tasks";

import GerencialLayout from "../../components/organisms/GerencialLayout";

import { TodoCardPropsType } from "../../components/molecules/TodoCard/type";
import ToDoList from "../../components/organisms/ToDoList";
import { useAlert } from "../../context/AlertContext";

function DashboardPage() {
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(true);

  const [backlogTasks, setBacklogTasks] = useState<TodoCardPropsType[]>([]);
  const [todoTasks, setTodoTasks] = useState<TodoCardPropsType[]>([]);
  const [processTasks, setProcessTasks] = useState<TodoCardPropsType[]>([]);
  const [doneTasks, setDoneTasks] = useState<TodoCardPropsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
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
          <ToDoList title="Backlog Tasks" tasks={backlogTasks} />
          <ToDoList title="To Do Tasks" tasks={todoTasks} />
          <ToDoList title="In Process" tasks={processTasks} />
          <ToDoList title="Done" tasks={doneTasks} />
        </div>
      </main>
    </GerencialLayout>
  );
};

export default DashboardPage;