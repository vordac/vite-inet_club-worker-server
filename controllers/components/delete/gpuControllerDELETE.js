const pool = require("../../../db");

exports.deleteGPU = (req, res) => {
    const id_gpu = req.params.id_gpu;

    pool.query('DELETE from components.gpu where id_gpu = $1', [id_gpu], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};