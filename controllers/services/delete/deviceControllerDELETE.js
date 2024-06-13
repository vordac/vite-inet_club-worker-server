const pool = require("../../../db");

exports.deleteDevice = (req, res) => {
    const id_device = req.params.id_device;

    pool.query('DELETE from service.device where id_device = $1', [id_device], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};