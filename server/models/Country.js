import db from "../config/database.js";

class Country {
    constructor ( hotel_country, country_code ) {
        this.hotel_country = hotel_country;
        this.country_code = country_code;
    }

    static findAll() {
        try {
            let sql = `SELECT * FROM countries`;
            return db.execute(sql);
        } catch (error) {
            throw error;
        }
    }

}

export default Country;
