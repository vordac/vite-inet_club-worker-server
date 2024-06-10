const pool = require("../../../db");

exports.getCooling = (req, res) => {
    pool.query('SELECT id_cooling, name_cooling, quantity_cooling from components.cooling ORDER BY id_cooling', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}