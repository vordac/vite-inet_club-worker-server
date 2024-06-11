const pool = require("../../../db");

exports.deleteSSD = (req, res) => {
    const id_ssd = req.params.id_ssd;

    pool.query('DELETE from components.ssd where id_ssd = $1', [id_ssd], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};