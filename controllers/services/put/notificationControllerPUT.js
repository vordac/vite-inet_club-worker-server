const pool = require("../../../db");

exports.putNotification = (req, res) => {
    const status_new = req.body.status_new;
    const id_notification = req.body.id_notification;
    const query = 'UPDATE service.notification SET status = $1 WHERE id_notification = $2';

    pool.query(query, [status_new, id_notification], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};