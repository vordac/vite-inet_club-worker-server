const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config({ path: './config.env' });
const app = express();
const pool = require("./db");
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// IMPORT COMPONENTS GET
// ADMIN
const deviceControllerGET = require('./controllers/services/get/deviceControllerGET');
const notificationControllerGET = require('./controllers/services/get/notificationControllerGET');
const reservationControllerGET = require('./controllers/services/get/reservationControllerGET');
const seatControllerGET = require('./controllers/services/get/seatControllerGET');
const tariffControllerGET = require('./controllers/services/get/tariffControllerGET');
const tariffPriceControllerGET = require('./controllers/services/get/tariffPriceControllerGET');

// IMPORT COMPONENTS POST
// ADMIN
const deviceControllerPOST = require('./controllers/services/post/deviceControllerPOST');
const reservationControllerPOST = require('./controllers/services/post/reservationControllerPOST');
const seatControllerPOST = require('./controllers/services/post/seatControllerPOST');
const tariffControllerPOST = require('./controllers/services/post/tariffControllerPOST');

// IMPORT COMPONENTS DELETE
// ADMIN
const deviceControllerDELETE = require('./controllers/services/delete/deviceControllerDELETE');
const notificationControllerDELETE = require('./controllers/services/delete/notificationControllerDELETE');
const reservationControllerDELETE = require('./controllers/services/delete/reservationControllerDELETE');
const seatControllerDELETE = require('./controllers/services/delete/seatControllerDELETE');
const tariffControllerDELETE = require('./controllers/services/delete/tariffControllerDELETE');

// IMPORT COMPONENTS PUT
// ADMIN
const seatControllerPUT = require('./controllers/services/put/seatControllerPUT');
const notificationControllerPUT = require('./controllers/services/put/notificationControllerPUT');

// IMPORT COMPONENTS GET
// SYSADMIN
const pcControllerGET = require('./controllers/components/get/pcControllerGET');
const consoleControllerGET = require('./controllers/components/get/consoleControllerGET');
const coolingControllerGET = require('./controllers/components/get/coolingControllerGET');
const cpuControllerGET = require('./controllers/components/get/cpuControllerGET');
const gpuControllerGET = require('./controllers/components/get/gpuControllerGET');
const hddControllerGET = require('./controllers/components/get/hddControllerGET');
const headsetControllerGET = require('./controllers/components/get/headsetControllerGET');
const keyboardControllerGET = require('./controllers/components/get/keyboardControllerGET');
const monitorControllerGET = require('./controllers/components/get/monitorControllerGET');
const motherboardControllerGET = require('./controllers/components/get/motherboardControllerGET');
const mouseControllerGET = require('./controllers/components/get/mouseControllerGET');
const powerControllerGET = require('./controllers/components/get/powerControllerGET');
const ramControllerGET = require('./controllers/components/get/ramControllerGET');
const ssdControllerGET = require('./controllers/components/get/ssdControllerGET');
const unitControllerGET = require('./controllers/components/get/unitControllerGET');

// IMPORT COMPONENTS POST
// SYSADMIN
const pcControllerPOST = require('./controllers/components/post/pcControllerPOST');
const consoleControllerPOST = require('./controllers/components/post/consoleControllerPOST');
const coolingControllerPOST = require('./controllers/components/post/coolingControllerPOST');
const cpuControllerPOST = require('./controllers/components/post/cpuControllerPOST');
const gpuControllerPOST = require('./controllers/components/post/gpuControllerPOST');
const hddControllerPOST = require('./controllers/components/post/hddControllerPOST');
const headsetControllerPOST = require('./controllers/components/post/headsetControllerPOST');
const keyboardControllerPOST = require('./controllers/components/post/keyboardControllerPOST');
const monitorControllerPOST = require('./controllers/components/post/monitorControllerPOST');
const motherboardControllerPOST = require('./controllers/components/post/motherboardControllerPOST');
const mouseControllerPOST = require('./controllers/components/post/mouseControllerPOST');
const powerControllerPOST = require('./controllers/components/post/powerControllerPOST');
const ramControllerPOST = require('./controllers/components/post/ramControllerPOST');
const ssdControllerPOST = require('./controllers/components/post/ssdControllerPOST');
const unitControllerPOST = require('./controllers/components/post/unitControllerPOST');

// IMPORT COMPONENTS DELETE
// SYSADMIN
const pcControllerDELETE = require('./controllers/components/delete/pcControllerDELETE');
const consoleControllerDELETE = require('./controllers/components/delete/consoleControllerDELETE');
const coolingControllerDELETE = require('./controllers/components/delete/coolingControllerDELETE');
const cpuControllerDELETE = require('./controllers/components/delete/cpuControllerDELETE');
const gpuControllerDELETE = require('./controllers/components/delete/gpuControllerDELETE');
const hddControllerDELETE = require('./controllers/components/delete/hddControllerDELETE');
const headsetControllerDELETE = require('./controllers/components/delete/headsetControllerDELETE');
const keyboardControllerDELETE = require('./controllers/components/delete/keyboardControllerDELETE');
const monitorControllerDELETE = require('./controllers/components/delete/monitorControllerDELETE');
const motherboardControllerDELETE = require('./controllers/components/delete/motherboardControllerDELETE');
const mouseControllerDELETE = require('./controllers/components/delete/mouseControllerDELETE');
const powerControllerDELETE = require('./controllers/components/delete/powerControllerDELETE');
const ramControllerDELETE = require('./controllers/components/delete/ramControllerDELETE');
const ssdControllerDELETE = require('./controllers/components/delete/ssdControllerDELETE');
const unitControllerDELETE = require('./controllers/components/delete/unitControllerDELETE');

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.connect((err, client, done) => {
    if (err) {
        console.log('PostgreSQL connection failed: ', err);
    } else {
        console.log('PostgreSQL connection successful');
        done();
    }
});

// GET endpoints
// ADMIN
app.get('/get-device', deviceControllerGET.getDevice);
app.get('/get-notification', notificationControllerGET.getNotification);
app.get('/get-reservation', reservationControllerGET.getReservation);
app.get('/get-seat', seatControllerGET.getSeat);
app.get('/get-tariff', tariffControllerGET.getTariff);
app.get('/get-tariff-price', tariffPriceControllerGET.getTariff);

// POST endpoints
// ADMIN
app.post('/post-device', deviceControllerPOST.postDevice);
app.post('/post-reservation', reservationControllerPOST.postReservation);
app.post('/post-seat', seatControllerPOST.postSeat);
app.post('/post-tariff', tariffControllerPOST.postTariff);

// DELETE endpoints
// ADMIN
app.delete('/delete-device/:id_device', deviceControllerDELETE.deleteDevice);
app.delete('/delete-notification/:id_notification', notificationControllerDELETE.deleteNotification);
app.delete('/delete-reservation/:id_reservation', reservationControllerDELETE.deleteReservation);
app.delete('/delete-seat/:id_seat', seatControllerDELETE.deleteSeat);
app.delete('/delete-tariff/:id_tariff', tariffControllerDELETE.deleteTariff);

// PUT endpoints
// ADMIN
app.put('/put-seat/:status_seat_new/:id_seat', seatControllerPUT.putSeat);
app.put('/put-notification/:status_new/:id_notification', notificationControllerPUT.putNotification);

// GET endpoints
// SYSADMIN
app.get('/get-pc', pcControllerGET.getPC);
app.get('/get-console', consoleControllerGET.getConsole);
app.get('/get-cooling', coolingControllerGET.getCooling);
app.get('/get-cpu', cpuControllerGET.getCPU);
app.get('/get-gpu', gpuControllerGET.getGPU);
app.get('/get-hdd', hddControllerGET.getHDD);
app.get('/get-headset', headsetControllerGET.getHeadset);
app.get('/get-keyboard', keyboardControllerGET.getKeyboard);
app.get('/get-monitor', monitorControllerGET.getMonitor);
app.get('/get-motherboard', motherboardControllerGET.getMotherboard);
app.get('/get-mouse', mouseControllerGET.getMouse);
app.get('/get-power', powerControllerGET.getPower);
app.get('/get-ram', ramControllerGET.getRAM);
app.get('/get-ssd', ssdControllerGET.getSSD);
app.get('/get-unit', unitControllerGET.getUnit);


// POST endpoints
// SYSADMIN
app.post('/post-pc', pcControllerPOST.postPC);
app.post('/post-console', consoleControllerPOST.postConsole);
app.post('/post-cooling', coolingControllerPOST.postCooling);
app.post('/post-cpu', cpuControllerPOST.postCPU);
app.post('/post-gpu', gpuControllerPOST.postGPU);
app.post('/post-hdd', hddControllerPOST.postHDD);
app.post('/post-headset', headsetControllerPOST.postHeadset);
app.post('/post-keyboard', keyboardControllerPOST.postKeyboard);
app.post('/post-monitor', monitorControllerPOST.postMonitor);
app.post('/post-motherboard', motherboardControllerPOST.postMotherboard);
app.post('/post-mouse', mouseControllerPOST.postMouse);
app.post('/post-power', powerControllerPOST.postPower);
app.post('/post-ram', ramControllerPOST.postRAM);
app.post('/post-ssd', ssdControllerPOST.postSSD);
app.post('/post-unit', unitControllerPOST.pustUnit);

// DELETE endpoints
// SYSADMIN
app.delete('/delete-pc/:id_pc', pcControllerDELETE.deletePC);
app.delete('/delete-console/:id_console', consoleControllerDELETE.deleteConsole);
app.delete('/delete-cooling/:id_cooling', coolingControllerDELETE.deleteCooling);
app.delete('/delete-cpu/:id_cpu', cpuControllerDELETE.deleteCPU);
app.delete('/delete-gpu/:id_gpu', gpuControllerDELETE.deleteGPU);
app.delete('/delete-hdd/:id_hdd', hddControllerDELETE.deleteHDD);
app.delete('/delete-headset/:id_headset', headsetControllerDELETE.deleteHeadset);
app.delete('/delete-keyboard/:id_keyboard', keyboardControllerDELETE.deleteKeyboard);
app.delete('/delete-monitor/:id_monitor', monitorControllerDELETE.deleteMonitor);
app.delete('/delete-motherboard/:id_motherboard', motherboardControllerDELETE.deleteMotherboard);
app.delete('/delete-mouse/:id_mouse', mouseControllerDELETE.deleteMouse);
app.delete('/delete-power/:id_power', powerControllerDELETE.deletePower);
app.delete('/delete-ram/:id_ram', ramControllerDELETE.deleteRAM);
app.delete('/delete-ssd/:id_ssd', ssdControllerDELETE.deleteSSD);
app.delete('/delete-unit/:id_unit', unitControllerDELETE.deleteUnit);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});