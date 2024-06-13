const pool = require("../../../db");

exports.deleteTariff = (req, res) => {
    const id_tariff = req.params.id_tariff;

    pool.query('DELETE from service.tariff where id_tariff = $1', [id_tariff], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};