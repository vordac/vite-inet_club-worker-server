const pool = require("../../../db");

exports.getConsole = (req, res) => {
    pool.query('SELECT id_console, name_console, quantity_console ORDER BY id_cooling', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}