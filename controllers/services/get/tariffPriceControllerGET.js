const pool = require("../../../db");

exports.getTariff = (req, res) => {
    const id_tariff = req.body.id_tariff;

    pool.query('SELECT id_tariff, name_tariff, price_tariff from service.tariff WHERE id_tariff = $1', [id_tariff], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}