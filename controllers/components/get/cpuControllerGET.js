const pool = require("../../../db");

exports.getCPU = (req, res) => {
    pool.query('SELECT id_cpu, name_cpu, quantity_cpu from components.cpu ORDER BY id_cpu', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}