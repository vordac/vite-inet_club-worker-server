const pool = require("../../../db");

exports.deleteMouse = (req, res) => {
    const id_mouse = req.params.id_mouse;

    pool.query('DELETE from components.mouse where id_mouse = $1', [id_mouse], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};