import { useState } from "react";
import type { CommentType } from "../types";

function useCommentTree(initialData: CommentType[]) {
  const [comments, setComments] = useState<CommentType[]>(initialData);

  const insertNode = (
    tree: CommentType[],
    commentId: number,
    newComment: CommentType
  ): CommentType[] => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newComment],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, newComment),
        };
      }
      return comment;
    });
  };

  const editNode = (
    tree: CommentType[],
    commentId: number,
    content: string
  ): CommentType[] => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content: content,
          timestamp: new Date().toISOString(),
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: editNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const deleteNode = (
    tree: CommentType[],
    commentId: number
  ): CommentType[] => {
    return tree
      .filter((comment) => comment.id !== commentId)
      .map((comment) => {
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: deleteNode(comment.replies, commentId),
          };
        }
        return comment;
      });
  };

  const insertComment = (commentId: number | null, content: string) => {
    const newComment: CommentType = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  };

  const editComment = (commentId: number, content: string) => {
    setComments((prevComments) => editNode(prevComments, commentId, content));
  };

  const deleteComment = (commentId: number) => {
    setComments((prevComments) => deleteNode(prevComments, commentId));
  };

  return { comments, insertComment, editComment, deleteComment };
}

export default useCommentTree;
