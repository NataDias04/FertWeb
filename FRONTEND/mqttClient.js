import mqtt from 'mqtt';
let isConnected = false;

const mqttConfig = {
    host: 'wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud',
    port: 8884,
    clientId: '123projetopi',
    username: 'projetopi',
    password: '12345678'
};

const mqttClient = mqtt.connect(mqttConfig);

mqttClient.on('connect', function () {
    if (!isConnected) {
        isConnected = true;
        console.log('Conectado ao broker MQTT');
    }
});

mqttClient.on('offline', function () {
    isConnected = false;
    console.log('Desconectado do broker MQTT');
});

mqttClient.on('reconnect', function () {
    console.log('Tentando reconectar ao broker MQTT');
});

export { mqttClient, isConnected };
