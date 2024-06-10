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
const computerControllerGET = require('./controllers/components/get/computerControllerGET');
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
const computerControllerPOST = require('./controllers/components/post/computerControllerPOST');
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
const computerControllerDELETE = require('./controllers/components/delete/computerControllerDELETE');
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
app.get('/get-computer', computerControllerGET.getComputer);
app.get('/get-console', consoleControllerGET.getConsole);
app.get('/get-cooling', coolingControllerGET.getCooling);
app.get('/get-cpu', cpuControllerGET.getCpu);
app.get('/get-gpu', gpuControllerGET.getGpu);
app.get('/get-hdd', hddControllerGET.getHdd);
app.get('/get-headset', headsetControllerGET.getHeadset);
app.get('/get-keyboard', keyboardControllerGET.getKeyboard);
app.get('/get-monitor', monitorControllerGET.getMonitor);
app.get('/get-motherboard', motherboardControllerGET.getMotherboard);
app.get('/get-mouse', mouseControllerGET.getMouse);
app.get('/get-power', powerControllerGET.getPower);
app.get('/get-ram', ramControllerGET.getRam);
app.get('/get-ssd', ssdControllerGET.getSsd);
app.get('/get-unit', unitControllerGET.getUnit);

// POST endpoints
app.post('/post-computer', computerControllerGET.getComputer);
app.post('/post-console', consoleControllerGET.getConsole);
app.post('/post-cooling', coolingControllerPOST.postCooling);
app.post('/post-cpu', cpuControllerGET.getCpu);
app.post('/post-gpu', gpuControllerGET.getGpu);
app.post('/post-hdd', hddControllerGET.getHdd);
app.post('/post-headset', headsetControllerGET.getHeadset);
app.post('/post-keyboard', keyboardControllerGET.getKeyboard);
app.post('/post-monitor', monitorControllerGET.getMonitor);
app.post('/post-motherboard', motherboardControllerGET.getMotherboard);
app.post('/post-mouse', mouseControllerGET.getMouse);
app.post('/post-power', powerControllerGET.getPower);
app.post('/post-ram', ramControllerGET.getRam);
app.post('/post-ssd', ssdControllerGET.getSsd);
app.post('/post-unit', unitControllerGET.getUnit);

// DELETE endpoints
// app.delete('/delete-computer', computerControllerDELETE.deleteComputer);
// app.delete('/delete-console', consoleControllerDELETE.deleteConsole);
app.delete('/delete-cooling/:id_cooling', coolingControllerDELETE.deleteCooling);
// app.delete('/delete-cpu', cpuControllerDELETE.deleteCpu);
// app.delete('/delete-gpu', gpuControllerDELETE.deleteCooling);
// app.delete('/delete-hdd', hddControllerDELETE.getHdd);
// app.delete('/delete-headset', headsetControllerDELETE.getHeadset);
// app.delete('/delete-keyboard', keyboardControllerDELETE.getKeyboard);
// app.delete('/delete-monitor', monitorControllerDELETE.getMonitor);
// app.delete('/delete-motherboard', motherboardControllerDELETE.getMotherboard);
// app.delete('/delete-mouse', mouseControllerDELETE.getMouse);
// app.delete('/delete-power', powerControllerDELETE.getPower);
// app.delete('/delete-ram', ramControllerDELETE.getRam);
// app.delete('/delete-ssd', ssdControllerDELETE.getSsd);
// app.delete('/delete-unit', unitControllerDELETE.getUnit);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});