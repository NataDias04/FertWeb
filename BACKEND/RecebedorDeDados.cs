using System;
using System.Text;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;

class RecebedorDeDados
{
    public static async Task IniciarRecebimento()
    {
        var factory = new MqttFactory();
        var mqttClient = factory.CreateMqttClient();

        var options = new MqttClientOptionsBuilder()
            .WithWebSocketServer("wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt")
            .WithClientId("321projetopi")
            .WithTls()
            .WithCredentials("projetopi", "12345678")
            .Build();

        mqttClient.UseConnectedHandler(async e =>
        {
            Console.WriteLine("Conectado ao broker MQTT. api>>rasp");
            await mqttClient.SubscribeAsync("Api/Raspberry"); 
        });

        mqttClient.UseDisconnectedHandler(async e =>
        {
            Console.WriteLine("Desconectado do broker MQTT.Api/Raspberry");
            await Task.Delay(TimeSpan.FromSeconds(5));
            await mqttClient.ConnectAsync(options);
        });

        mqttClient.UseApplicationMessageReceivedHandler(e =>
        {
            Console.WriteLine($"Mensagem recebida no tópico '{e.ApplicationMessage.Topic}': {Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
        });

        await mqttClient.ConnectAsync(options);
        Console.ReadLine();
    }
}
