const pool = require("../../../db");

exports.postMonitor = (req, res) => {
    const name_monitor = req.body.name_monitor;
    const quantity_monitor = req.body.quantity_monitor;

    pool.query('INSERT INTO components.monitor (name_monitor, quantity_monitor) values($1, $2) ', [name_monitor, quantity_monitor], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};