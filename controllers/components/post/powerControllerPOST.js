const pool = require("../../../db");

exports.postPower = (req, res) => {
    const name_power = req.body.name_power;
    const quantity_power = req.body.quantity_power;

    pool.query('INSERT INTO components.power (name_power, quantity_power) values($1, $2) ', [name_power, quantity_power], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};