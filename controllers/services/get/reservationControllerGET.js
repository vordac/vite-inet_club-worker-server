const pool = require("../../../db");

exports.getReservation = (req, res) => {
    pool.query('SELECT id_reservation, id_seat, phone, time_start, hours, payment, price, time_end, name_client, id_tariff from service.reservation ORDER BY id_reservation', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}