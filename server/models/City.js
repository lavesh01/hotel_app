import db from "../config/database.js";

class City {
    constructor ( hotel_city, city_code ) {
        this.hotel_city = hotel_city;
        this.city_code = city_code;
    }

    static findAll() {
        try {
            let sql = 'SELECT * FROM cities';
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

}

export default City;
