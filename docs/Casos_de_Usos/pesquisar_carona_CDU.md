# [DCDU] Pesquisar Carona
## Especificação de caso de uso

Histórico de revisão

| Data | Versão | Descrição | Autor |
|--|--|--|--|
| 01/2021 | 1.0 | Criação de "Pesquisar Carona" | Mozart Maia |


## Resumo
No caso de uso "Pesquisar Carona", o ator Passageiro ou Motorista irá pesquisar por uma carona, com base nos filtros estabelecidos por ele mesmo.

## Atores
Passageiro ou Motorista

## Pré-condições

 - Usuário deve estar logado no sistema

## Pós-condições
O usuário descobrirá todas as caronas que estiverem disponíveis com base em seu filtro, inclusive se não houver nenhuma.

## Fluxo de evento
### Fluxo básico

 1. Passageiro, após logar no Carona Amiga, será apresentado à tela inicial, que também é a tela de Pesquisar Caronas
 2. Sistema disponibilizará três filtros para exibir caronas: “Saindo de”, “Indo para” e “Data”
 3. Passageiro preenche os filtros: todos ou apenas os que escolher e clica no botão de pesquisar (lupa)
 4. Sistema exibe uma lista de resultados, com dados como: nome do motorista, nota do motorista, endereço de saída, endereço de destino, dias da semana que a carona ocorre, vagas na carona e horário, e exibe número de caronas disponíveis com base nos filtros

### Fluxo de erro - Sistema não consegue exibir resultado 
Após o passo 3 do fluxo básico

 1. Sistema por algum motivo não consegue acessar os dados das caronas no banco de dados, e exibe mensagem de erro: "Não conseguimos exibir resultados no momento. Por favor, tente mais tarde".

### Fluxo alternativo - Sistema não possui resultados com base nos filtros

Após o passo 3 do fluxo básico

 1. Sistema exibe a mensagem “Nenhuma carona disponível com essas características” na própria página

## Protótipo(s) de interface do CDU
![Inicial](https://user-images.githubusercontent.com/77278366/196989819-58ad5b6e-564b-42e2-92ad-b22e1232ad8f.png)
![Pesquisa](https://user-images.githubusercontent.com/77278366/196989830-b269d16c-74da-42a1-a3c0-3fccb755ef16.png)


