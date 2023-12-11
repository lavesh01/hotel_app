import City from "../models/City.js";
import Country from "../models/Country.js";

export const getCities = async ( req, res, next) => {
    try {
        let [cities,_] = await City.findAll();        
        res.status(200).json({ count: cities.length , cities})

    }catch (err) {
        console.log(err)
        next(err)
    }
}

export const getCountries = async ( req, res, next) => {
    try {
        let [countries,_] = await Country.findAll();        
        res.status(200).json({ count: countries.length , countries})

    }catch (err) {
        console.log(err)
        next(err)
    }
}