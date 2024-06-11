const pool = require("../../../db");

exports.deleteMonitor = (req, res) => {
    const id_monitor = req.params.id_monitor;

    pool.query('DELETE from components.monitor where id_monitor = $1', [id_monitor], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};