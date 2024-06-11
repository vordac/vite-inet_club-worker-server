const pool = require("../../../db");

exports.deleteKeyboard = (req, res) => {
    const id_keyboard = req.params.id_keyboard;

    pool.query('DELETE from components.keyboard where id_keyboard = $1', [id_keyboard], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};