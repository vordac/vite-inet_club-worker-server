const pool = require("../../../db");

exports.getNotification = (req, res) => {
    pool.query('SELECT id_notification, phone, date, status from service.notification ORDER BY id_notification', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}