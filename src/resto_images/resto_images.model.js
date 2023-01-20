import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Resto_images = newSeq.define(
  "resto_images",
  {
    resto_image_url: {
      type: DataTypes.STRING,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "restaurants", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
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
    console.log("Resto_images table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export const createResto_image = async (ri) => {
  const create = await Resto_images.create({
    resto_image_url: ri,
  });
  console.log(ri, "'s id : ", create.id);
  return create.id;
};

export const getResto_imagebyId = async (id) => {
  const allResto_image = await Resto_images.findOne({
    where: {
      id: id,
    },
  });
  return allResto_image;
};

export const getResto_imagebyName = async (fy) => {
  const allResto_image = await Resto_images.findOne({
    where: {
      resto_image_url: ri,
    },
  });
  return allResto_image;
};

export const deleteResto_image = (id) => {
  Resto_images.destroy({
    where: {
      id: id,
    },
  });
};

export const updateResto_image = async (data, id) => {
  await Resto_images.update(data, {
    where: {
      id: id,
    },
  });
};

export default Resto_images;
