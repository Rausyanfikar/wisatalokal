import { createComment, deleteComment, getCommentbyId, updateComment } from './comments.model.js';

export const commentCreateRest = async (req, res) => {
  const { comments } = req.body;

  if (!comments) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }
  const respModel = await createComment(comments);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success add comment',
    },
    data: {
      id: respModel,
    },
  });
};

export const commentGetByIDRest = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }

  const respModel = await getCommentbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success get comment',
    },
    data: respModel,
  });
};

export const commentUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { comments } = req.body;

  if (!(id && comments)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }

  const respModel = await updateComment({ comments }, id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success update comment',
    },
    data: {
      id: respModel,
    },
  });
};

export const commentDeleteRest = async (req, res) => {
  const { id } = req.query;
  const respModel = await deleteComment(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success delete comment',
    },
    data: respModel,
  });
};
