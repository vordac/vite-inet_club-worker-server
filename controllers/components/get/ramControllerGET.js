const pool = require("../../../db");

exports.getRAM = (req, res) => {
    pool.query('SELECT id_ram, name_ram, quantity_ram from components.ram ORDER BY id_ram', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}