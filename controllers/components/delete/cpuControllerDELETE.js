const pool = require("../../../db");

exports.deleteCPU = (req, res) => {
    const id_cpu = req.params.id_cpu;

    pool.query('DELETE from components.cpu where id_cpu = $1', [id_cpu], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};