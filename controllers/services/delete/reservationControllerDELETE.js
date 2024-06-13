const pool = require("../../../db");

exports.deleteReservation = (req, res) => {
    const id_reservation = req.params.id_reservation;

    pool.query('DELETE from service.reservation where id_reservation = $1', [id_reservation], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};