using System;
using System.Threading.Tasks;

class CentralDeComando
{
    static async Task Main(string[] args)
    {
        //Console.WriteLine("Iniciando envio de dados...");
        //await EnvioDeDados.InicializarEnvio();

        //Console.WriteLine("Iniciando recebimento de dados...");
        //await RecebedorDeDados.IniciarRecebimento();

        Console.WriteLine("Iniciando envio e recebimento de dados...");
        // Iniciar as duas tarefas simultaneamente
        var envioTask = EnvioDeDados.InicializarEnvio();
        var recebimentoTask = RecebedorDeDados.IniciarRecebimento();

        // Aguardar a conclusão de ambas as tarefas
        await Task.WhenAll(envioTask, recebimentoTask);

        //Manter o servio funcionando
        await Task.Delay(-1);

        Console.ReadLine();
    }
}
