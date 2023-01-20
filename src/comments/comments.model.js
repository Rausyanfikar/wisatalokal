import { DataTypes } from 'sequelize';
import { newSeq } from '../configs/database.js';

const Comments = newSeq.define(
  'comments',
  {
    comments: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // 'users' refers to table name
        key: 'id', // 'id' refers to column name in users table
      },
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurants', // 'users' refers to table name
        key: 'id', // 'id' refers to column name in users table
      },
    },
  },
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync()
  .then(() => {
    console.log('Comments table created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create table : ', error);
  });

export const createComment = async (comments) => {
  const create = await Comments.create({
    comments: comments,
  });
  return create.id;
};

export const getCommentbyId = async (id) => {
  const allComment = await Comments.findOne({
    where: {
      id: id,
    },
  });
  return allComment;
};

export const getCommentbyName = async (nm) => {
  const allComment = await Comments.findOne({
    where: {
      comments: cm,
    },
  });
  return allComment;
};

export const deleteComment = (id) => {
  Comments.destroy({
    where: {
      id: id,
    },
  });
};

export const updateComment = async (data, id) => {
  await Comments.update(data, {
    where: {
      id: id,
    },
  });
};

export default Comments;
