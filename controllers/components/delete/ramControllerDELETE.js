const pool = require("../../../db");

exports.deleteRAM = (req, res) => {
    const id_ram = req.params.id_ram;

    pool.query('DELETE from components.ram where id_ram = $1', [id_ram], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};