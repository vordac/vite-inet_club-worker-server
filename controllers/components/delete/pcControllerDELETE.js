const pool = require("../../../db");

exports.deletePC = (req, res) => {
    const id_pc = req.params.id_pc;

    pool.query('DELETE from devices.pc where id_pc = $1', [id_pc], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};