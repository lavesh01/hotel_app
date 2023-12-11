import { deleteHotelById, getAllHotels, getHotelById, postHotel } from "../controllers/hotelControllers.js";

import express from "express"
import { jwtAuthenticate } from './../middlewares/authMiddleware.js';

const router = express.Router();

router.route("/")
    .get(getAllHotels)
    .post(jwtAuthenticate,postHotel)

router.route("/:id")
    .get(getHotelById)
    .delete(jwtAuthenticate, deleteHotelById)
    
export default router
