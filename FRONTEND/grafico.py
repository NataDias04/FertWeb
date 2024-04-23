import matplotlib.pyplot as plt
import numpy as np

# Dados de exemplo - Temperatura do solo ao longo do tempo
tempo = 10 #np.arange(0, 24, 1)  # Horas do dia
temperatura =  15 #np.random.randint(15, 25, size=len(tempo))  # Temperatura aleatória entre 15°C e 25°C

# Criando o gráfico
plt.figure(figsize=(10.9, 2.50))  # Define o tamanho do gráfico conforme solicitado
plt.plot(tempo, temperatura, marker='o', color='blue')
plt.xlabel('Hora do Dia')
plt.ylabel('Temperatura do Solo (°C)')
plt.title('Temperatura do Solo ao Longo do Tempo')
plt.grid(True)
plt.tight_layout()

# Salvar o gráfico como uma imagem
plt.savefig('grafico_temperatura_solo.png')

print("Gráfico de temperatura do solo foi criado e salvo como 'grafico_temperatura_solo.png'.")
