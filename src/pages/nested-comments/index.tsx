import Comments from "./components/comments";
import data from "./data/comment.json";

function NestedComments() {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Nested Comments UI
        </h1>
      </div>
      <Comments
        data={data}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

export default NestedComments;
