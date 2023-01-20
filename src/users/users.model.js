import { DataTypes } from 'sequelize';
import { newSeq } from '../configs/database.js';

const Users = newSeq.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync({ alter: true })
  .then(() => {
    console.log('Users table created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create table : ', error);
  });

export const createUser = async (nm, em, pw, ph) => {
  const create = await Users.create({
    name: nm,
    email: em,
    password: pw,
    phone: ph,
  });
  console.log(nm, "'s id : ", create.id);
  return create.id;
};

// get all users
export const getUsers = async () => {
  const allUser = await Users.findAll();
  return allUser;
};

export const getUserbyId = async (id) => {
  const allUser = await Users.findOne({
    where: {
      id: id,
    },
  });
  return allUser;
};

export const getUserbyName = async (nm) => {
  const allUser = await Users.findOne({
    where: {
      name: nm,
    },
  });
  return allUser;
};

export const deleteUser = (id) => {
  const allUser = Users.destroy({
    where: {
      id: id,
    },
  });
  return allUser;
};
export const updateUser = async (data, id) => {
  const allUser = await Users.update(data, {
    where: {
      id: id,
    },
  });
  return allUser;
};

export default Users;
