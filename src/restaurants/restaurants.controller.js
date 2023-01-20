import { createRestaurant, deleteRestaurant, getRestaurantbyId, updateRestaurant } from './restaurants.model.js';

export const restaurantCreateRest = async (req, res) => {
  const { resto_name, location, user_id } = req.body;

  if (!(resto_name && location && user_id)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }
  const respModel = await createRestaurant(resto_name, location);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success add restaurant',
    },
    data: {
      id: respModel,
    },
  });
};

export const restaurantGetByIDRest = async (req, res) => {
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

  const respModel = await getRestaurantbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success get Restaurant',
    },
    data: respModel,
  });
};

export const restaurantUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { resto_name, location, user_id } = req.body;

  if (!(id && resto_name && location && user_id)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }

  const respModel = await updateRestaurant({ resto_name, location, user_id }, id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success update restaurant',
    },
    data: {
      id: respModel,
    },
  });
};

export const restaurantDeleteRest = async (req, res) => {
  const { id } = req.query;
  const respModel = await deleteRestaurant(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success delete restaurant',
    },
    data: respModel,
  });
};
