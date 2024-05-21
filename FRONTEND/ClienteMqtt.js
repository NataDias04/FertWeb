let isConnected = false;

const ConfigMqtt = {
    host: 'wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt',
    clientId: 'projetopiFrontEnd',
    username: 'projetopi',
    password: '12345678'
};

const ClienteMqtt = mqtt.connect(ConfigMqtt.host, {
    clientId: ConfigMqtt.clientId,
    username: ConfigMqtt.username,
    password: ConfigMqtt.password
});

ClienteMqtt.on('connect', function () {
    if (!isConnected) {
        isConnected = true;
        console.log('Conectado ao broker MQTT');
    }
});

ClienteMqtt.on('offline', function () {
    isConnected = false;
    console.log('Desconectado do broker MQTT');
});

ClienteMqtt.on('reconnect', function () {
    console.log('Tentando reconectar ao broker MQTT');
});

export { ClienteMqtt, isConnected };
