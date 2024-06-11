const pool = require("../../../db");

exports.deleteMotherboard = (req, res) => {
    const id_motherboard = req.params.id_motherboard;

    pool.query('DELETE from components.motherboard where id_motherboard = $1', [id_motherboard], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};