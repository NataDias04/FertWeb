using System;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;

class EnvioDeDados
{
    public static async Task InicializarEnvio()
    {
        var fabrica = new MqttFactory();
        var clienteMqtt = fabrica.CreateMqttClient();

        var opcoes = new MqttClientOptionsBuilder()
            .WithWebSocketServer("wss://4b8d62e12d9744ec8e2fdea77a5e66e2.s1.eu.hivemq.cloud:8884/mqtt")
            .WithClientId("123projetopi")
            .WithTls()
            .WithCredentials("projetopi", "12345678")
            .Build();

        clienteMqtt.UseConnectedHandler(async e =>
        {
            Console.WriteLine("Conectado ao broker MQTT.");
            await EnviarMensagem(clienteMqtt);
        });

        await clienteMqtt.ConnectAsync(opcoes);

        Console.ReadLine();
    }

    static async Task EnviarMensagem(IMqttClient clienteMqtt)
    {
        var mensagem = "Essa mensagem foi enviada da raspberry";
        var topico = "Raspberry/Api";

        while (true)
        {
            if (clienteMqtt.IsConnected)
            {
                var mensagemMqtt = new MqttApplicationMessageBuilder()
                    .WithTopic(topico)
                    .WithPayload(mensagem)
                    .WithExactlyOnceQoS()
                    .WithRetainFlag()
                    .Build();

                Console.WriteLine($"Mensagem enviada para o tópico '{topico}': {mensagem}");

                await clienteMqtt.PublishAsync(mensagemMqtt);
            }
            else
            {
                Console.WriteLine("Cliente MQTT desconectado.");
                await Task.Delay(TimeSpan.FromSeconds(600));
            }

            await Task.Delay(TimeSpan.FromSeconds(600));
        }
    }
}
