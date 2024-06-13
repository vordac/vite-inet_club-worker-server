const pool = require("../../../db");

exports.postSeat = (req, res) => {
    const number_seat = req.body.number_seat;
    const id_device = req.body.id_device;
    const status_seat = req.body.status_seat;

    pool.query('INSERT INTO service.seat (number_seat, id_device, status_seat) values($1, $2, $3) ',
        [
            number_seat,
            id_device,
            status_seat
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
};