const pool = require("../../../db");

exports.postMotherboard = (req, res) => {
    const name_motherboard = req.body.name_motherboard;
    const quantity_motherboard = req.body.quantity_motherboard;

    pool.query('INSERT INTO components.motherboard (name_motherboard, quantity_motherboard) values($1, $2) ', [name_motherboard, quantity_motherboard], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};