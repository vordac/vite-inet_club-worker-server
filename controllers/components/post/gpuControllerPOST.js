const pool = require("../../../db");

exports.postGPU = (req, res) => {
    const name_gpu = req.body.name_gpu;
    const quantity_gpu = req.body.quantity_gpu;

    pool.query('INSERT INTO components.gpu (name_gpu, quantity_gpu) values($1, $2) ', [name_gpu, quantity_gpu], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};