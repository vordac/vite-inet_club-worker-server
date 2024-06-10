const pool = require("../../../db");

exports.getCpu = (req, res) => {
    pool.query('SELECT id_cpu, name_cpu, quantity_cpu ORDER BY id_cpu', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}