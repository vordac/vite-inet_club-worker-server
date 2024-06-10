const pool = require("../../../db");

exports.postCooling = (req, res) => {
    const name_cooling = req.body.name_cooling;
    const quantity_cooling = req.body.quantity_cooling;

    pool.query('INSERT INTO components.cooling (name_cooling, quantity_cooling) values($1, $2) ', [name_cooling, quantity_cooling], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};