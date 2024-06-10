const pool = require("../../../db");

exports.getHeadset = (req, res) => {
    pool.query('SELECT id_headset, name_headset, quantity_headset ORDER BY id_headset', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}