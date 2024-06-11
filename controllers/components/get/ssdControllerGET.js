const pool = require("../../../db");

exports.getSSD = (req, res) => {
    pool.query('SELECT id_ssd, name_ssd, quantity_ssd from components.ssd ORDER BY id_ssd', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}