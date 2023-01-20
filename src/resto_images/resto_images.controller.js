import {
  createResto_image,
  deleteResto_image,
  getResto_imagebyId,
  updateResto_image,
} from "./resto_images.model.js";

export const resto_imageCreateRest = async (req, res) => {
  const { resto_image_url } = req.body;

  if (!resto_image_url) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }
  const respModel = await createResto_image(facility);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add resto_image",
    },
    data: {
      id: respModel,
    },
  });
};

export const resto_imageGetByIDRest = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await getResto_imagebyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get resto_image",
    },
    data: respModel,
  });
};

export const resto_imageUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { resto_image_url } = req.body;

  if (!(id && resto_image_url)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await updateResto_image(resto_image_url);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success update resto_image",
    },
    data: {
      id: respModel,
    },
  });
};

export const resto_imageDeleteRest = async (req, res) => {
  const { id } = req.query;
  const respModel = await deleteResto_image(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success delete resto_image",
    },
    data: respModel,
  });
};
