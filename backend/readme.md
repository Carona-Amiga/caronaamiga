# Backend

## Tecnologias
 + [Python 3](https://www.python.org)
 + [Pip](https://pip.pypa.io/en/stable/)
 + [Django Framework](https://www.djangoproject.com/)
 + [Django Rest Framework](https://www.django-rest-framework.org/)
 + [virtualenv](https://virtualenv.pypa.io/en/latest/)

## Pre-requisitos
 + Python 3.8
 + Docker
 + Docker compose

Obs.: **Docker compose** talvez seja necessário instalar separadamente em alguns sistema operacionais, então qualquer erro ou problema pesquise ou [abra uma issue](https://github.com/Carona-Amiga/caronaamiga/issues/new)

## Instalação
Clone repositório:
```bash
# Baixe o repositório em sua máquina
git clone https://github.com/Carona-Amiga/caronaamiga.git

# Acessa a pasta
cd caronaamiga/backend
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

Configure o ambiente:

Na pasta backend, vai ter um arquivo **.env.sample** que serve de exemplo para configuração do ambiente. Copie o arquivo e renomeie para **.env**. O arquivo estará assim.

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=

SECRET_KEY=
```

As variáveis `DB_USER`, `DB_PASSWORD`, `DB_NAME` pode ser usado qualquer uma que desejar. `DB_HOST` pode ser utilizado o *endereço IP* do container, que pode ser obtido pelo comando:

```bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' caronaamiga_db
```

A variável de ambiente `SECRET_KEY` pode ser obtido com o comando:

```bash
# Se não funcionar, use o comando python3
python -c "import secrets; print(secrets.token_urlsafe())"
```

Setup do banco de dados (comando para "construir" serviços utilizando Docker):
```bash
docker compose up -d
```

Execute a migração do banco de dados:
```bash
python3 manage.py migrate
```

Para executar o servidor:
```bash
python3 manage.py runserver
```

O projeto estará rodando em `locahost:8000`

## Configuração do Linter

 + Selecionar o executação Python na pasta *env* (virtualenv)
 + Selecionar o [flake8](https://flake8.pycqa.org/en/latest/)
 + Talvez seja preciso reiniciar a IDE ou editor de texto para aplicar o efeito 