const pool = require("../../../db");

exports.getRam = (req, res) => {
    pool.query('SELECT id_ram, name_ram, quantity_ram ORDER BY id_ram', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}