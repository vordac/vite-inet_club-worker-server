const pool = require("../../../db");

exports.postHeadset = (req, res) => {
    const name_headset = req.body.name_headset;
    const quantity_headset = req.body.quantity_headset;

    pool.query('INSERT INTO components.headset (name_headset, quantity_headset) values($1, $2) ', [name_headset, quantity_headset], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};