const pool = require("../../../db");

exports.postCPU = (req, res) => {
    const name_cpu = req.body.name_cpu;
    const quantity_cpu = req.body.quantity_cpu;

    pool.query('INSERT INTO components.cpu (name_cpu, quantity_cpu) values($1, $2) ', [name_cpu, quantity_cpu], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};