Comandos da instalação do Docker:

1.  ssh -i C:\Users\20181014040004\Downloads\VM_key.pem azureuser@20.115.42.175 **(permissões para acessar a máquina virtual)**
2.  sudo su
3.  curl -sSL https://get.docker.com | sh  **(instalação do docker)**
4.  docker -v **(versão do docker)**
5. docker pull alpine **(versão mais leve do docker)**
6.  docker pull [ubuntu] **(baixar imagem no docker)**
7. docker pull [ubuntu:16.04] **(passando a versão) **  
8.  docker images **(verificar as imagens do docker)**
9.1 docker rmi [id do images] **(removendo imagens do docker)**

Criando containers
1. docker run -i -t [ubuntu:16.04] /bin/bash **(Criando container)**
2. cat /etc/issue **(verificar versão)**
3. CTRL + P, solta o P e CTRL + Q **(sair do container sem matar o container)**
4. docker ps **(container ativos)**
5. docker attach [id] **(retorna para o container antigo ativo)**

Mapeamentos de portas:
<maquinas_fisica>:portas_do_container

1. docker run -ti -p 8080:80 ubuntu:16.04 /bin/bash

Observação:
**[] - parâmetros**
