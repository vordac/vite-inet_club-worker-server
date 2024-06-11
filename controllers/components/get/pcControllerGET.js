const pool = require("../../../db");

exports.getPC = (req, res) => {
    pool.query('SELECT pc.id_pc, pc.id_cpu, cpu.name_cpu, pc.id_gpu, pc.id_motherboard, pc.id_ram, pc.id_hdd, pc.id_ssd, pc.id_cooling, pc.id_power, pc.id_unit, pc.id_monitor, pc.id_mouse, pc.id_keyboard, pc.id_headset FROM devices.pc AS pc INNER JOIN components.cpu AS cpu ON pc.id_cpu = cpu.id_cpu ORDER BY pc.id_pc', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}