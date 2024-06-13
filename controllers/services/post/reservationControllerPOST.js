const pool = require("../../../db");

exports.postReservation = (req, res) => {
    const name_console = req.body.name_console;
    const model_console = req.body.model_console;
    const quantity_console = req.body.quantity_console;

    pool.query('INSERT INTO devices.console (name_console, model_console, quantity_console) values($1, $2, $3) ',
        [
            name_console,
            model_console,
            quantity_console
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
};