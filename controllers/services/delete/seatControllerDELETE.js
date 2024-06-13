const pool = require("../../../db");

exports.deleteSeat = (req, res) => {
    const id_seat = req.params.id_seat;

    pool.query('DELETE from service.seat where id_seat = $1', [id_seat], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};