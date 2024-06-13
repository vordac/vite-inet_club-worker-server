const pool = require("../../../db");

exports.postReservation = (req, res) => {
    const id_seat = req.body.id_seat;
    const phone = req.body.phone;
    const time_start = req.body.time_start;
    const hours = req.body.hours;
    const payment = req.body.payment;
    const price = req.body.price;
    const time_end = req.body.time_end;
    const name_client = req.body.name_client;
    const id_tariff = req.body.id_tariff;
    const people = req.body.people;
    const price_tariff = req.body.price_tariff;

    pool.query('INSERT INTO service.reservation (id_seat, phone, time_start, hours, payment, price, time_end, name_client, id_tariff, people, price_tariff) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) ',
        [
            id_seat,
            phone,
            time_start,
            hours,
            payment,
            price,
            time_end,
            name_client,
            id_tariff,
            people,
            price_tariff
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
};