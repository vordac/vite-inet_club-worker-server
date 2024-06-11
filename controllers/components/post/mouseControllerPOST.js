const pool = require("../../../db");

exports.postMouse = (req, res) => {
    const name_mouse = req.body.name_mouse;
    const quantity_mouse = req.body.quantity_mouse;

    pool.query('INSERT INTO components.mouse (name_mouse, quantity_mouse) values($1, $2) ', [name_mouse, quantity_mouse], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};