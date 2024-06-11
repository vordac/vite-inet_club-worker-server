const pool = require("../../../db");

exports.getUnit = (req, res) => {
    pool.query('SELECT id_unit, name_unit, quantity_unit from components.unit ORDER BY id_unit', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}