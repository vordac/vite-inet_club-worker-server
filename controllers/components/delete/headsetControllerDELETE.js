const pool = require("../../../db");

exports.deleteHeadset = (req, res) => {
    const id_headset = req.params.id_headset;

    pool.query('DELETE from components.headset where id_headset = $1', [id_headset], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};