const pool = require("../../../db");

exports.postDevice = (req, res) => {
    const name_device = req.body.name_device;
    const type_device = req.body.type_device;

    pool.query('INSERT INTO service.device (name_device, type_device) values($1, $2) ',
        [
            name_device,
            type_device
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
};