const pool = require("../../../db");

exports.deleteUnit = (req, res) => {
    const id_unit = req.params.id_unit;

    pool.query('DELETE from components.unit where id_unit = $1', [id_unit], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};