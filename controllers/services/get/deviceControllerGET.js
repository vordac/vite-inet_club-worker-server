const pool = require("../../../db");

exports.getDevice = (req, res) => {
    pool.query('SELECT id_device, name_device, type_device from service.device ORDER BY id_device', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}