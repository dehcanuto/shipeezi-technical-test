import { useEffect, useState } from "react";

import { handleListTasks } from "../../hooks/tasks";
import { GerencialLayout } from "../../components";
import ToDoList from "../../components/organisms/ToDoList";
import { TodoCardPropsType } from "../../components/molecules/TodoCard/type";

function DashboardPage() {
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