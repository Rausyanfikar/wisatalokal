import { DataTypes } from 'sequelize';
import { newSeq } from '../configs/database.js';

const Restaurants = newSeq.define(
  'restaurants',
  {
    resto_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // 'users' refers to table name
        key: 'id', // 'id' refers to column name in users table
      },
    },
  },
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync({ alter: true })
  .then(() => {
    console.log('Restaurants table created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create table : ', error);
  });

export const createRestaurant = async (rm, lc, ui) => {
  const create = await Restaurants.create({
    resto_name: rm,
    location: lc,
    user_id: ui,
  });
  console.log(rm, "'s id : ", create.id);
  return create.id;
};

export const getRestaurantbyId = async (id) => {
  const allRestaurant = await Restaurants.findOne({
    where: {
      id: id,
    },
  });
  return allRestaurant;
};

export const getRestaurantbyName = async (rm) => {
  const allRestaurant = await Restaurants.findOne({
    where: {
      resto_name: rm,
    },
  });
  return allRestaurant;
};

export const deleteRestaurant = (id) => {
  Restaurants.destroy({
    where: {
      id: id,
    },
  });
};

export const updateRestaurant = async (data, id) => {
  await Restaurants.update(data, {
    where: {
      id: id,
    },
  });
};

export default Restaurants;
