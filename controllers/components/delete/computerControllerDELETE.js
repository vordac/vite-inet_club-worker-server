const pool = require("../../../db");

exports.deleteComputer = (req, res) => {
    const id_computer = req.params.id_cpu;

    pool.query('DELETE from components.cooling where id_cpu = $1', [id_cpu], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};