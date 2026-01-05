const createComment = async (payload: {
  content: string;
  authorId: string;
  postId: string;
  parentId?: string;
}) => {
  console.log("create comment", payload);
};

export const CommentService = {
  createComment,
  // getCommentById,
  // getCommentsByAuthor,
  // deleteComment,
  // updateComment
};
