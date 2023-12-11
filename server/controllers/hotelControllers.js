import Country from "../models/Country.js";
import Hotel from "../models/Hotel.js";

export const getAllHotels = async ( req, res, next) => {
    try {
        let [hotels,_] = await Hotel.findAll();        
        res.status(200).json({ count: hotels.length , hotels})

    }catch (err) {
        console.log(err)
        next(err)
    }
}

export const postHotel = async ( req, res, next) => {
    try {

        let { hotel_code, hotel_name, city_code, country_code } = req.body;
        let hotel = new Hotel(hotel_code, hotel_name, city_code, country_code);
        await hotel.save();
        
        res.status(201).json({ "message" : "Hotel Created!" })
    }catch (err) {
        console.log(err)
        next(err);
    }
}

export const getHotelById = async ( req, res, next) => {
    try {
        const { id } = req.params;
        let [hotel,_] = await Hotel.findById(id);

        res.status(200).json({ hotel: hotel[0] })
    }catch (err) {
        console.log(err)
        next(err);
    }
}

export const deleteHotelById = async (req, res, next) => {
    try {
      const { id } = req.params;
      await Hotel.findByIdAndDelete(id);
  
      res.status(200).json({ message: `Hotel deleted successfully.` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };