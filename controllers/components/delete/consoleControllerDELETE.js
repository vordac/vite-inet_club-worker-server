const pool = require("../../../db");

exports.deleteConsole = (req, res) => {
    const id_console = req.params.id_console;

    pool.query('DELETE from components.console where id_console = $1', [id_console], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};