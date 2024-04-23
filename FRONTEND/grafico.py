import os
import matplotlib.pyplot as plt
import numpy as np
import requests

# Dados de exemplo - Temperatura do solo ao longo do tempo
tempo = 18 #np.arange(0, 24, 1)  # Horas do dia
temperatura =  8 #np.random.randint(15, 25, size=len(tempo))  # Temperatura aleatória entre 15°C e 25°C

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

import base64

# Configurações do repositório e do arquivo
github_repo = 'NataDias04/FertWeb'
file_path = 'FRONTEND/grafico_temperatura_solo.png'
commit_message = 'Atualizando gráfico de temperatura do solo'

# Obter o token de acesso pessoal da variável de ambiente
token = os.environ.get('GITHUB_TOKEN')

# URL para obter informações sobre o arquivo
github_url = f'https://api.github.com/repos/{github_repo}/contents/{file_path}'

# Ler o conteúdo do arquivo
with open(file_path, 'rb') as file:
    file_content = file.read()

# Codificar o conteúdo do arquivo em base64
file_content_base64 = base64.b64encode(file_content).decode('utf-8')

# Obter o SHA do arquivo atual no repositório
response = requests.get(github_url)
current_file_info = response.json()
current_sha = current_file_info['sha']

# Construir os dados para a requisição de commit
commit_data = {
    'message': commit_message,
    'content': file_content_base64,
    'sha': current_sha,
    'committer': {
        'name': 'Nata',
        'email': 'natadiassantos@ucl.br'
    }
}

# URL para realizar o commit
commit_url = f'https://api.github.com/repos/{github_repo}/contents/{file_path}'

# Realizar o commit
response = requests.put(commit_url, headers={'Authorization': f'token {token}'}, json=commit_data)

# Verificar o resultado do commit
if response.status_code == 200:
    print('Commit realizado com sucesso.')
else:
    print('Erro ao realizar o commit:', response.text)
