const pool = require("../../../db");

exports.getGpu = (req, res) => {
    pool.query('SELECT id_gpu, name_gpu, quantity_gpu ORDER BY id_gpu', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}