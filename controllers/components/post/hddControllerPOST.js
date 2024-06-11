const pool = require("../../../db");

exports.postHDD = (req, res) => {
    const name_hdd = req.body.name_hdd;
    const quantity_hdd = req.body.quantity_hdd;

    pool.query('INSERT INTO components.hdd (name_hdd, quantity_hdd) values($1, $2) ', [name_hdd, quantity_hdd], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};