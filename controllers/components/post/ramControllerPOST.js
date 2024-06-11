const pool = require("../../../db");

exports.postRAM = (req, res) => {
    const name_ram = req.body.name_ram;
    const quantity_ram = req.body.quantity_ram;

    pool.query('INSERT INTO components.ram (name_ram, quantity_ram) values($1, $2) ', [name_ram, quantity_ram], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};