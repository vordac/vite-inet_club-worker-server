const pool = require("../../../db");

exports.getMouse = (req, res) => {
    pool.query('SELECT id_mouse, name_mouse, quantity_mouse ORDER BY id_mouse', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}