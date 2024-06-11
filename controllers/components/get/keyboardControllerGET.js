const pool = require("../../../db");

exports.getKeyboard = (req, res) => {
    pool.query('SELECT id_keyboard, name_keyboard, quantity_keyboard from components.keyboard ORDER BY id_keyboard', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}