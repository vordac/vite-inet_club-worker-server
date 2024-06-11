const pool = require("../../../db");

exports.deletePower = (req, res) => {
    const id_power = req.params.id_power;

    pool.query('DELETE from components.power where id_power = $1', [id_power], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};