const mqtt = require('mqtt');

cons
const mqttConfig = {
    host: 'wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud',
    port: 8884,
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
};

const mqttClient = mqtt.connect(mqttConfig);

module.exports = mqttClient;
