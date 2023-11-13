import express from "express";

import { likePost, selectPost } from "../services/blog";
import { getCityPicture } from "../services/cityPicture";

const router = express.Router();

router.post("/test", likePost);
router.post("/citypicture/select", getCityPicture);

export default router;