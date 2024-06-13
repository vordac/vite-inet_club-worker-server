const pool = require("../../../db");

exports.getConsole = (req, res) => {
    pool.query('SELECT id_console, name_console, model_console, quantity_console from devices.console ORDER BY id_console', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}