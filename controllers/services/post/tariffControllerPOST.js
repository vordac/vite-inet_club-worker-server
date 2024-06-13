const pool = require("../../../db");

exports.postTariff = (req, res) => {
    const name_tariff = req.body.name_tariff;
    const price_tariff = req.body.price_tariff;

    pool.query('INSERT INTO service.tariff (name_tariff, price_tariff) values($1, $2) ',
        [
            name_tariff,
            price_tariff
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
};