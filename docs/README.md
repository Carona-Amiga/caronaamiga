# Documento de visão

Tabela de conteúdos
--------------------
* [Histórico de revisão](#historico-de-revisao)
* [Carona Amiga](#carona-amiga)
* [Descrição do problema](#descricao-do-problema)
* [Descrição dos usuários](#descricao-dos-usuarios)
* [Alternativas concorrentes](#alternativas-concorrentes)
* [Escopo](#escopo)
* [Requisitos funcionais](#requisitos-funcionais)
* [Requisitos não funcionais](#requisitos-nao-funcionais)
* [Regras de negócio](#regras-de-negocio)
* [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
* [Requisitos funcionais x Casos de uso](#requisitos-funcionais-x-casos-de-uso)


<h2 id="historico-de-revisao">Histórico de revisão</h2>

|    Data    |  Versão |  Descrição | Autor |
|:----------:|:-------:|:-----------|:-----:|
| 13/12/2021 |   1.0   | Definição do problema, usuários e escopo | Matheus Oliveira |
| 17/12/2021 |   1.1   | Correção de ortografia, corrigir detalhes do escopo | Matheus Oliveira |
| 20/12/2021 |   1.2   | Definir descrição, requisitos e regras de negócio | Matheus Oliveira |
| 22/12/2021 |   1.3   | Redefinir requisitos funcionais e adaptar regras de negócio | Matheus Oliveira |
| 24/12/2021 |   1.4   | Mudança dos textos | Caio Batista |
| 27/12/2021 |   1.5   | Estender regras de negócio e inserção de imagens dos casos de uso | Matheus Oliveira |
| 09/01/2022 |   1.6   | Definir a relação entre requisitos funcionais e casos de uso | Matheus Oliveira |

<h2 id="carona-amiga">Carona Amiga</h2>

O projeto Carona Amiga tem como objetivo unir as pessoas que se deslocam diariamente para o mesmo local, criando uma rede de carona que ajude mutuamente os usuários (motoristas e passageiros). Os motoristas visam diminuir custos com combustível, enquanto os passageiros procuram diminuir o tempo de espera por transporte. Através de um sistema web que oferece uma forma de encontro e de comunicação entre quem pode oferecer carona, em seu meio de transporte, e quem necessita de carona na mesma rota.

O Carona Amiga, além de ajudar essas pessoas a se encontrarem, ajuda no trânsito ao diminuir a quantidade de automóveis nas ruas e, consequentemente, contribui na redução de liberação de poluentes.


<h2 id="descricao-do-problema">Descrição do problema</h2>


|   |   |
|---|---|
| __O problema de__ | custos altos do transporte e demora de transportes públicos |
| __afeta__ | pessoas que carecem dessa necessidade constantemente |
| __cujo impacto é__ | atrasos na chegada ao destino, viagens desconfortáveis, maior quantidade veículos em circulação |
| __uma boa solução seria__ | um serviço que oferece meios de compartilhar veículos com uma plataforma focada na comunicação para  que as necessidades dos envolvidos sejam realizadas. |

<h2 id="descricao-dos-usuarios">Descrição dos usuários</h2>

|    Nome   |  Ambiente de trabalho |  Responsabilidade |
|:----------|:----------------------|:------------------|
| Motorista | Usuários cadastrados que podem oferecer caronas. | Cadastrar caronas, administrar caronas (definir passageiros, vagas no carro, etc), enviar mensagens em chat da carona, ver perfis. |
| Passageiro |   Usuários cadastrados que podem se interessar por caronas. | Sinalizar interesse na carona, enviar mensagens em chat da carona, pesquisar por caronas, ver perfis. |


<h2 id="alternativas-concorrentes">Alternativas concorrentes</h2>

+ BlaBlaCar

  Sistema disponível para Android, iOS e Web para compartilhamento de caronas com o objetivo de dividir os custos da viagem, além da socialização feita. As principais funcionalidades são: realizar viagens interestaduais, sugerir preço do custo da viagem, avaliação mútua entre motoristas e passageiros.

+ Waze Carpool

  Sistema disponível para Android e iOS para oferecer ou pedir carona. Com objetivo de diminuir as despesas da viagem para o motorista, dividindo os custos com os passageiros. Os principais diferenciais do serviço são: o compartilhamento da viagem nas redes sociais e criação de grupos que façam o mesmo trajeto.


<h2 id="escopo">Escopo</h2>

+ __O que é__: Um serviço web para achar caronas a partir de um interesse mútuo entre motorista e passageiro(s) com suporte de comunicação entre os envolvidos com objetivo de tornar a carona recorrente.

+ __O que não é__: Um serviço de contratação de corridas como meio d
e trabalho.

+ __O que faz__: Agenda carona, oferece um suporte de comunicação, sugere usuários de acordo com critérios (localização, preferências do usuário), pesquisar por caronas com uma funcionalidade de filtros.

+ __O que não faz__: Não entrega encomendas, não faz viagens interestaduais, não faz viagens não agendadas.

<h2 id="requisitos-funcionais">Requisitos funcionais</h2>

| Código | Nome |
|:-------|:-----|
| F01 | O sistema sugere possíveis caronas para passageiro |
| F02 | Usuário visualiza caronas |
| F03 | Usuário gerencia conta (criar, editar) |
| F04 | Usuário gerencia mensagens (listar, enviar) |
| F05 | Passageiro indica interesse por caronas cadastradas |
| F06 | Passageiro pesquisa por caronas |
| F07 | Passageiro filtra caronas |
| F08 | Motorista gerencia caronas (listar, criar, editar e deletar) |
| F09 | Motorista gerencia grupo de carona |

<h2 id="requisitos-nao-funcionais">Requisitos não funcionais</h2>

| Código | Nome | Tipo | Descrição | 
|:---|:-----|:----------|:----------------|
| NF01 | Adequação | Funcionalidade | O sistema se adapta a diferentes situações, porém não a todos os tipos de usuário, como por exemplo, usuários com deficiência visual ou auditiva. | 
| NF02 | Acurácia | Funcionalidade | O sistema executa suas funções com precisão. | 
| NF03 | Segurança de acesso | Confiabilidade | O sistema apresenta 100% de segurança e todas as informações são protegidas no banco de dados. | 
| NF04 | Recuperabilidade | Confiabilidade | Caso o sistema fique off-line os dados estarão armazenados no banco de dados, e o sistema restaurado com as últimas configurações. | 
| NF05 | Apresentabilidade | Usabilidade | O sistema deverá ser o mais intuitivo possível para o uso do usuário. | 
| NF06 | Operacionalidade | Usabilidade | A interface precisa seguir o fluxo de funcionamento do sistema. Sendo o mais simples possível para entendimento do usuário e não apresentando dificuldades ou redundância. | 
| NF07 | Analisabilidade | Manutenibilidade  | O sistema apresenta documentação detalhada de seus requisitos, proporcionando facilidade na análise de alguma função ou código. | 

<h2 id="regras-de-negocio">Regras de negócio</h2>

| Código | Nome |
|:-------|:-----|
| RN01 | A pesquisa por caronas é realizada a partir do ponto de saída, pontos intermediários ou do ponto de destino |
| RN02 | A sugestão de caronas é feita de acordo com a localidade do usuário e seus destinos de interesses |
| RN03 | O passageiro pode enviar uma mensagem para o motorista ao mostrar interesse por carona |
| RN04 | Motoristas podem ter várias caronas ativas simultaneamente |
| RN05 | Passageiros podem se interessar por diferentes caronas ao mesmo tempo |
| RN06 | Caronas são filtradas de acordo com critérios que definem uma carona, por exemplo vagas, horário e data. |
| RN07 | A pesquisa só pode ser realizada se um dos critérios a seguir forem preenchidos: “Saindo de”, “Indo para”, data e horário. |

<h2 id="diagrama-de-casos-de-uso">Diagrama de casos de uso</h2>

<img src="./diagrama_de_casos_de_uso.png" alt="Diagrama de casos de uso" width="750" />

<h2 id="requisitos-funcionais-x-casos-de-uso">Requisitos funcionais x Casos de uso</h2>


|   Casos de uso   | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 |
|:----------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|   Criar carona   |     |     |     |     |     |     |     |  x  |     |
|  Editar carona   |     |     |     |     |     |     |     |  x  |     |
|  Enviar mensagem |     |     |     |  x  |  x  |     |     |     |     |
| Pesquisar carona |     |     |     |     |     |  x  |  x  |     |     |
