import { GerencialLayout } from "../../components";
import ToDoList from "../../components/organisms/ToDoList";

function DashboardPage() {
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