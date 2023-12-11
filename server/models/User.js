import bcrypt from "bcrypt";
import db from "../config/database.js";

const saltRounds = 10;

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async save() {
        try {
            const hashedPassword = await bcrypt.hash(this.password, saltRounds);
            
            const sql = `
                INSERT INTO users (username, password)
                VALUES ( '${this.username}', '${hashedPassword}')
            `;

            return db.execute(sql);

            // return rows;
        } catch (error) {
            throw error;
        }
    }

    static async findByUsername(username) {
        try {
            const sql = 'SELECT * FROM users WHERE username = ?';
            const [rows, _] = await db.execute(sql, [username]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

export default User;
