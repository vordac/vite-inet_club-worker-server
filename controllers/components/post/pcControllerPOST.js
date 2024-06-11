const pool = require("../../../db");

exports.postPC = (req, res) => {
    const id_cpu = req.body.id_cpu;
    const id_gpu = req.body.id_gpu;
    const id_motherboard = req.body.id_motherboard;
    const id_ram = req.body.id_ram;
    const id_hdd = req.body.id_hdd;
    const id_ssd = req.body.id_ssd;
    const id_cooling = req.body.id_cooling;
    const id_power = req.body.id_power;
    const id_unit = req.body.id_unit;
    const id_monitor = req.body.id_monitor;
    const id_mouse = req.body.id_mouse;
    const id_keyboard = req.body.id_keyboard;
    const id_headset = req.body.id_headset;
    const name_pc = req.body.name_pc;

    pool.query(
        'INSERT INTO devices.pc (id_cpu, id_gpu, id_motherboard, id_ram, id_hdd, id_ssd, id_cooling, id_power, id_unit, id_monitor, id_mouse, id_keyboard, id_headset, name_pc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
        [
            id_cpu,
            id_gpu,
            id_motherboard,
            id_ram,
            id_hdd,
            id_ssd,
            id_cooling,
            id_power,
            id_unit,
            id_monitor,
            id_mouse,
            id_keyboard,
            id_headset,
            name_pc,
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        }
    );
};
