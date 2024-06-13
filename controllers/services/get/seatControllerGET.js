const pool = require("../../../db");

exports.getSeat = (req, res) => {
    pool.query('SELECT id_seat, number_seat, id_device, status_seat from service.seat ORDER BY id_seat', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}