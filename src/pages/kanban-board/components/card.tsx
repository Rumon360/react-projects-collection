import type { CardType } from "../types";

interface CardProps {
  task: CardType;
}

function Card({ task }: CardProps) {
  return (
    <div className="shadow border border-zinc-700 rounded-lg p-4 bg-zinc-800/60">
      <div>
        <h2 className="text-lg lg:text-xl font-semibold">{task.title}</h2>
        <div className="pt-4 flex justify-between items-center w-full text-neutral-400">
          <p className="text-sm lg:text-base">{task.id}</p>
          <p className="text-sm lg:text-base">{task.points}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
