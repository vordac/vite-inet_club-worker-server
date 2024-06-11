const pool = require("../../../db");

exports.deleteHDD = (req, res) => {
    const id_hdd = req.params.id_hdd;

    pool.query('DELETE from components.hdd where id_hdd = $1', [id_hdd], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};