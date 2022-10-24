# [DCDU] Enviar mensagem para motorista
## Especificação de caso de uso

Histórico de revisão

| Data | Versão | Descrição | Autor |
|--|--|--|--|
| 01/2021 | 1.0 | Criação de "Enviar mensagem para motorista" | Mozart Maia |


## Resumo
No caso de uso "Enviar Mensagem para motorista" o ator Passageiro irá enviar uma mensagem para o motorista da carona clicada, após pesquisar por ela na tela inicial.

## Atores
Passageiro e motorista

## Pré-condições

 - Passageiro deve estar logado no sistema
 - Passageiro deve ter passado pelo CDU "Pesquisar Carona"

## Pós-condições
Comunicação entre passageiro e motorista terá sido iniciada

## Fluxo de evento
### Fluxo básico

 1. Na tela inicial, após o caso de uso Pesquisar Carona, o passageiro visualiza as caronas que o sistema disponibiliza com base nos filtros e clica na carona que deseja participar
 2. O sistema abre uma caixa de chat com o motorista da carona
 3. Passageiro digita no campo inferior da caixa de chat a sua mensagem, aperta o botão de enviar ou a tecla Enter para enviar mensagem
 4. Sistema envia mensagem para o motorista

### Fluxo de erro - Mensagem não enviada 
Após o passo 4 do fluxo básico

 1. Sistema por algum motivo não consegue enviar mensagem para o motorista e exibe a mensagem “Não foi possível enviar mensagem no momento. Tente novamente mais tarde”

## Protótipo(s) de interface do CDU

![Mensagens](https://user-images.githubusercontent.com/77278366/196989643-e8577d3d-0f46-4f20-8aee-1721a536f033.png)

