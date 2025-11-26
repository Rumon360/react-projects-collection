import { useState } from "react";
import Card from "./components/card";
import { Status, type CardType } from "./types";
import { cn } from "../../utils/utils";

function KanbanBoard() {
  const [tasks, setTasks] = useState<CardType[]>([
    {
      id: "BUS-01",
      title: "Do market research",
      points: 6,
      status: Status.TODO,
    },
    {
      id: "BUS-02",
      title: "Work on DSA",
      points: 2,
      status: Status.TODO,
    },
    {
      id: "BUS-03",
      title: "Plan sprint goals",
      points: 3,
      status: Status.DONE,
    },
    {
      id: "BUS-04",
      title: "Refactor authentication module",
      points: 8,
      status: Status.TODO,
    },
    {
      id: "BUS-05",
      title: "Design new user interface",
      points: 13,
      status: Status.IN_PROGRESS,
    },
    {
      id: "BUS-06",
      title: "Write unit tests for API endpoints",
      points: 5,
      status: Status.IN_PROGRESS,
    },
    {
      id: "BUS-07",
      title: "Deploy to staging environment",
      points: 2,
      status: Status.TODO,
    },
  ]);

  const columns = Object.values(Status).map((status) => ({
    status,
    tasks: tasks.filter((task) => task.status === status),
  }));

  return (
    <div className="p-8 w-full h-full lg:container mx-auto">
      <div className="mb-10 mt-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Kanban Board
        </h1>
      </div>
      <div className="relative w-full grid gap-4 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.status} className="kanban-grid">
            <div
              className={cn(
                "flex items-center justify-between border-b-2 px-6 py-6",
                Status.TODO === column.status &&
                  "bg-orange-500/10 border-b-orange-500",
                Status.IN_PROGRESS === column.status &&
                  "bg-blue-500/10 border-b-blue-500",
                Status.DONE === column.status &&
                  "bg-green-500/10 border-b-green-500"
              )}
            >
              <h2 className="text-xl font-semibold">{column.status}</h2>
              <p className="text-lg text-neutral-400">{column.tasks.length}</p>
            </div>
            <div className="p-6 space-y-4 border-dashed border-t-0 border-zinc-700">
              {column.tasks.map((task) => (
                <Card key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
