const pool = require("../../../db");

exports.pustUnit = (req, res) => {
    const name_unit = req.body.name_unit;
    const quantity_unit = req.body.quantity_unit;

    pool.query('INSERT INTO components.unit (name_unit, quantity_unit) values($1, $2) ', [name_unit, quantity_unit], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};