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


/*client.on('connect', function () { if (!isConnected) { // Verifica se ainda não está conectado isConnected = true; // Atualiza o estado da conexão console.log('Conectado ao broker MQTT Raspberry/Api'); client.subscribe(topic, function (err) { if (err) { console.error('Erro ao se inscrever no tópico Raspberry/Api', err); } else { console.log('Inscrição no tópico bem-sucedida Raspberry/Api'); } }); } });*/
