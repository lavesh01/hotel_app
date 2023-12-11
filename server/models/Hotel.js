import db from "../config/database.js";

class Hotel {
    constructor ( hotel_code, hotel_name, city_code, country_code ) {
        this.hotel_code = hotel_code;
        this.hotel_name = hotel_name;
        this.city_code = city_code;
        this.country_code = country_code;
    }

    async save() {
        try {
            const lastHotelCode = await Hotel.getLastHotelCode();
            const lastCodeNumericPart = parseInt(lastHotelCode.slice(2), 10);
            const newNumericPart = lastCodeNumericPart + 1;

            const newHotelCode = `EL${newNumericPart}`;

            const sql = `
                INSERT INTO hotels (
                    hotel_code, hotel_name, city_code, country_code
                ) VALUES (
                    '${newHotelCode}' , '${this.hotel_name}' , '${this.city_code}' , '${this.country_code}'
                )`; 
            return db.execute(sql);    
        } catch (error) {
            throw error;
        }
    }

    static findAll() {
        try {
            let sql = `
                SELECT
                    hotels.id,
                    hotels.hotel_code,
                    hotels.hotel_name,
                    cities.hotel_city,
                    hotels.city_code,
                    hotels.country_code,
                    countries.hotel_country 
                FROM hotels
                INNER JOIN cities ON hotels.city_code = cities.city_code
                INNER JOIN countries ON hotels.country_code = countries.country_code;
            `;

            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static findById(id) {
        try {
            let sql = `SELECT * FROM hotels WHERE id = ${id}`
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

    static findByIdAndDelete(id) {
        try {
          let sql = `DELETE FROM hotels WHERE id = ${id}`;
          return db.execute(sql);
        } catch (error) {
          throw error;
        }
    }

    static async getLastHotelCode() {
        try {
            let sql = 'SELECT hotel_code FROM hotels ORDER BY id DESC LIMIT 1'
            const [lastHotel,_] = await db.execute(sql);
            return lastHotel.length > 0 ? lastHotel[0].hotel_code : 'EL0';
            
        } catch (error) {
            throw error;
        }
    }

}

export default Hotel;
