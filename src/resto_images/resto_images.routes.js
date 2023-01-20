import { Router } from "express";
import {
  resto_imageCreateRest,
  resto_imageDeleteRest,
  resto_imageGetByIDRest,
  resto_imageUpdateRest,
} from "./resto_images.controller.js";

const router = Router();

router.post("/resto_images", resto_imageCreateRest);
router.get("/resto_images", resto_imageGetByIDRest);
router.put("/resto_images/:id", resto_imageUpdateRest);
router.delete("/resto_images/:id", resto_imageDeleteRest);

export default router;
