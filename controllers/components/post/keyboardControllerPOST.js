const pool = require("../../../db");

exports.postKeyboard = (req, res) => {
    const name_keyboard = req.body.name_keyboard;
    const quantity_keyboard = req.body.quantity_keyboard;

    pool.query('INSERT INTO components.keyboard (name_keyboard, quantity_keyboard) values($1, $2) ', [name_keyboard, quantity_keyboard], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};