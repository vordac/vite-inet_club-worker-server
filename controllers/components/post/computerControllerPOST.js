const pool = require("../../../db");

exports.getComputer = (req, res) => {
    pool.query('SELECT id_pc, quantity ORDER BY id_cooling', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}