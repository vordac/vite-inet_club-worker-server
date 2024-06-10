const pool = require("../../../db");

exports.getMonitor = (req, res) => {
    pool.query('SELECT id_monitor, name_monitor, quantity_monitor ORDER BY id_monitor', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}