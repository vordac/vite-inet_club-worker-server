const pool = require("../../../db");

exports.putSeat = (req, res) => {
    const status_seat_new = req.body.status_seat_new;
    const id_seat = req.body.id_seat;
    const query = 'UPDATE service.seat SET status_seat = $1 WHERE id_seat = $2';

    pool.query(query, [status_seat_new, id_seat], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};