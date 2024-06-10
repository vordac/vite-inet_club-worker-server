const pool = require("../../../db");

exports.deleteCooling = (req, res) => {
    const id_cooling = req.params.id_cooling;

    pool.query('DELETE from components.cooling where id_cooling = $1', [id_cooling], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};