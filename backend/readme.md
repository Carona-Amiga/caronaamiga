# Backend

## Tecnologias
 + [Python 3](https://www.python.org)
 + [Pip](https://pip.pypa.io/en/stable/)
 + [Django Framework](https://www.djangoproject.com/)
 + [Django Rest Framework](https://www.django-rest-framework.org/)
 + [virtualenv](https://virtualenv.pypa.io/en/latest/)

## Pre-requisitos
 + Python 3.8

## Instalação
Clone repositório:
```bash
# Baixe o repositório em sua máquina
git clone https://github.com/tads-cnat/caronaamiga22.git

# Acessa a pasta
cd caronaamiga22/backend
```  

Crie um ambiente virtual com virtualenv:
```bash
# Cria o ambiente virtual
virtualenv env

# Ative o ambiente o virtual
source env/bin/activate
```
Obs.: Dependendo do seu sistema operacional ou como foi instalado o ```virtualenv``` o comando pode ser diferente.

Instale as dependências:
```bash
pip3 install -r requirements.txt
```

Execute a migração do banco de dados:
```bash
python3 manage.py migrate
```

## Configuração do Linter

 + Selecionar o executação Python na pasta *env* (virtualenv)
 + Selecionar o [flake8](https://flake8.pycqa.org/en/latest/)
 + Talvez seja preciso reiniciar a IDE ou editor de texto para aplicar o efeito 