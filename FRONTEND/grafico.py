import os
import matplotlib.pyplot as plt
import numpy as np
import requests

# Obter o token de acesso pessoal da variável de ambiente
token = os.environ.get('GITHUB_TOKEN')

# Dados de exemplo - Temperatura do solo ao longo do tempo
tempo = 10 #np.arange(0, 24, 1)  # Horas do dia
temperatura =  5 #np.random.randint(15, 25, size=len(tempo))  # Temperatura aleatória entre 15°C e 25°C

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

# Fazer upload do arquivo para o repositório do GitHub
github_repo = 'NataDias04/FertWeb'
file_path = 'FRONTEND/grafico_temperatura_solo.png'
github_url = f'https://api.github.com/repos/{github_repo}/contents/{file_path}'

with open(file_path, 'rb') as file:
    file_content = file.read()

headers = {
    'Authorization': f'token {token}'
}

data = {
    'message': 'Atualizando gráfico de temperatura do solo',
    'content': file_content
}

response = requests.put(github_url, headers=headers, json=data)

if response.status_code == 200:
    print('Gráfico de temperatura do solo foi atualizado no repositório.')
else:
    print('Erro ao atualizar o gráfico no repositório:', response.text)
