

using System;

using System.Threading.Tasks;

using System.Diagnostics;

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



    clienteMqtt.UseDisconnectedHandler(async e =>

    {

        Console.WriteLine("Cliente MQTT desconectado.");

        Console.WriteLine("Razão da desconexão: " + e.Exception?.Message); // Registra a razão da desconexão, se houver

        await Task.Delay(TimeSpan.FromSeconds(5));

        await clienteMqtt.ConnectAsync(opcoes); // Tenta reconectar após um curto intervalo

    });



    Console.WriteLine("Tentando se conectar ao broker MQTT...");

    await clienteMqtt.ConnectAsync(opcoes);

    Console.WriteLine("Conectado com sucesso!");



    Console.ReadLine(); // Aguarda até que o programa seja encerrado

}







    static async Task EnviarMensagem(IMqttClient clienteMqtt)

    {

        while (true)

        {

            var temperatura = LerTemperaturaDoSensorPython();

            var temperaturaMensagem = $"{temperatura}ºC";

            var topico = "Raspberry/Api";



            if (clienteMqtt.IsConnected)

            {

                var mensagemMqtt = new MqttApplicationMessageBuilder()

                    .WithTopic(topico)

                    .WithPayload(temperaturaMensagem)

                    .WithExactlyOnceQoS()

                    .WithRetainFlag()

                    .Build();



                Console.WriteLine($"Mensagem enviada para o tópico '{topico}': {temperaturaMensagem}");



                await clienteMqtt.PublishAsync(mensagemMqtt);

            }

            else

            {

                Console.WriteLine("Cliente MQTT desconectado. Tentando reconectar...");

                await Task.Delay(TimeSpan.FromSeconds(20));

            }



            await Task.Delay(TimeSpan.FromSeconds(0.1));

        }

    }



    //método Hargreaves

        public double EvapotranspiracaoHargreaves(double tempMin, double tempMax, double tempMedia, double radExtraterrestre)

    {

        double eto = 0.0023 * Math.Sqrt(tempMax - tempMin) * (tempMedia + 17.8) * Math.Sqrt(radExtraterrestre);

        return eto;

    }



    static int LerTemperaturaDoSensorPython()

    {

        ProcessStartInfo start = new ProcessStartInfo();

        start.FileName = "python";

        start.Arguments = "dht11.py";

        start.UseShellExecute = false;

        start.RedirectStandardOutput = true;



        using (Process process = Process.Start(start))

        {

            using (System.IO.StreamReader reader = process.StandardOutput)

            {
                string result = reader.ReadToEnd();
                // Tente converter o valor para int

                int temperatura;

                if (int.TryParse(result, out temperatura))

                {
                    return temperatura;
                }

                else

                {

                    throw new Exception("Não foi possível ler a temperatura do sensor.");

                }

            }

        }

    }



}

