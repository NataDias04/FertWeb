using System;
using System.Text;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;

using System.Device.Gpio;
using System.Threading;

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

        // Definir o pino do LED
        int pin = 6;

        // Criar uma instância do controlador GPIO
        using var controller = new GpioController();

        // Abrir o pino do LED como saída
        controller.OpenPin(pin, PinMode.Output);

        controller.Write(pin, PinValue.Low);

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
            string mensagem = Encoding.UTF8.GetString(e.ApplicationMessage.Payload);
            Console.WriteLine($"Mensagem recebida no tópico '{e.ApplicationMessage.Topic}': {mensagem}");

            // Verificar se a mensagem é a esperada para ligar o LED
            if (mensagem == "Olá, Raspberry Pi!")
            {
                // Ativar o LED
                controller.Write(pin, PinValue.High);
                
                // Esperar por 5 segundos
                Thread.Sleep(5000);
                
                // Desativar o LED
                controller.Write(pin, PinValue.Low);
            }
        });

        await mqttClient.ConnectAsync(options);
        Console.ReadLine(); // Aguardar até que o programa seja encerrado
    }
}
