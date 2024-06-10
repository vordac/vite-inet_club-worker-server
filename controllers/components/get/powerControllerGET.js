const pool = require("../../../db");

exports.getPower = (req, res) => {
    pool.query('SELECT id_power, name_power, quantity_power ORDER BY id_power', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}