const pool = require("../../../db");

exports.getHDD = (req, res) => {
    pool.query('SELECT id_hdd, name_hdd, quantity_hdd from components.hdd ORDER BY id_hdd', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}