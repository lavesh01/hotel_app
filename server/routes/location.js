import { getCities, getCountries } from '../controllers/locationControllers.js';

import express from "express"

const router = express.Router();

router.route("/cities")
    .get(getCities)

router.route("/countries")
    .get(getCountries)

export default router
