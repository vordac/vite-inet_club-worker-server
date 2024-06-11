const pool = require("../../../db");

exports.postSSD = (req, res) => {
    const name_ssd = req.body.name_ssd;
    const quantity_ssd = req.body.quantity_ssd;

    pool.query('INSERT INTO components.ssd (name_ssd, quantity_ssd) values($1, $2) ', [name_ssd, quantity_ssd], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};