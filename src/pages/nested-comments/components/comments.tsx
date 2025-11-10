import { useState } from "react";
import useCommentTree from "../hooks/useCommentTree";
import type { CommentType } from "../types";
import Comment from "./comment";

interface Props {
  data: CommentType[];
  onSubmit: (content: string) => void;
  onEdit: (content: string) => void;
  onDelete: (commentId: number) => void;
}

function Comments({ data, onSubmit, onEdit, onDelete }: Props) {
  const [comment, setComment] = useState("");

  const { comments, insertComment, editComment, deleteComment } =
    useCommentTree(data);

  const handleSubmit = () => {
    if (comment.trim().length > 0) {
      insertComment(null, comment);
      setComment("");
    }
  };

  const handleReply = (commentId: number, content: string) => {
    insertComment(commentId, content);
    onSubmit(content);
  };

  const handleEdit = (commentId: number, content: string) => {
    editComment(commentId, content);
    onEdit(content);
  };

  const handleDelete = (commentId: number) => {
    deleteComment(commentId);
    onDelete(commentId);
  };

  return (
    <div>
      <div className="flex flex-col max-w-2xl gap-y-4">
        <textarea
          minLength={1}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          cols={50}
          className="border border-zinc-100 p-4 rounded-lg focus:outline-none"
          placeholder="Add a new comment..."
        />
        <button
          onClick={handleSubmit}
          className="cursor-pointer px-4 py-2 bg-blue-500 rounded-lg w-fit"
        >
          Add comment
        </button>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
            onEditComment={handleEdit}
            onDeleteComment={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
