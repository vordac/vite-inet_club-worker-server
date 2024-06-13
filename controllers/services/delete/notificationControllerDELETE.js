const pool = require("../../../db");

exports.deleteNotification = (req, res) => {
    const id_notification = req.params.id_notification;

    pool.query('DELETE from service.notification where id_notification = $1', [id_notification], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};