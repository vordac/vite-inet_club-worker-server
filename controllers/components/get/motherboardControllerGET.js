const pool = require("../../../db");

exports.getMotherboard = (req, res) => {
    pool.query('SELECT id_motherboard, name_motherboard, quantity_motherboard from components.motherboard ORDER BY id_motherboard', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}