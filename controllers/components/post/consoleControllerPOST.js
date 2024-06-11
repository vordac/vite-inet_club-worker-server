const pool = require("../../../db");

exports.postConsole = (req, res) => {
    const name_console = req.body.name_console;
    const quantity_console = req.body.quantity_console;

    pool.query('INSERT INTO components.console (name_console, quantity_console) values($1, $2) ', [name_console, quantity_console], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};