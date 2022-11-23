# [DCDU] Adicionar passageiros ao grupo de carona
## Especificação de caso de uso

Histórico de revisão

| Data | Versão | Descrição | Autor |
|--|--|--|--|
| 11/2022 | 1.0 | Criação de "Adicionar passageiro a darona" | Jackson Ricardo |


## Resumo
No caso de uso **"Adicionar passageiros ao grupo de carona**", o ator motorista irá criar um grupo na plataforma”, onde poderá manter contato com os usuários dos sistema Carona Amiga, com informaçães sobre as corridas, a comunicação poderá ser feita pela plataforma. 

## Atores
Passageiro e motorista

## Pré-condições
- O motorista deve estar logado no sistema.
- Passageiro deve estar logado no sistema.
- Passageiro deve ter passado pelo CDU "Enviar mensagem para motorista".

## Pós-condições
- O usuário do Carona Amiga, poderá enviar mensagens ao motorista a qualquer hora para combinar uma nova corrida.

## Fluxo de evento
### Fluxo básico
1. Motorista clica na conversa iniciada pelos os usuários do Carona.
2. Motorista seleciona todas as conversas que desejar para criar o grupo.
3. Sistema exibe o botão "Criar grupo de conversas", no canto superior, e o motorista clica no botão.
4. Sistema informa que o grupo de Caronas foram criadas com sucesso e exibe a tela dos grupos de conversas que já foram criados.

### Fluxo de erro - Sistema não consegue salvar as informações 
Após o passo 2 do fluxo básico
- Sistema não finalizar a criação do grupo, e exibe mensagem de erro: "Não foi possível efetuar esta operação, por favor, verifique a sua conexão com a internet ou tente mais tarde".

### Fluxo alternativo - Motorista deleta grupo de carona
Em qualquer momento após o passo 3 do fluxo básico

- Motorista clica no botão "Apagar".
- Sistema exibe pop-up com pergunta: "Realmente deseja apagar a carona? As informações desta conversa não estarão mais disponíveis".
- Motorista clica no botão "Sim".
- Sistema informa: "conversa deletada com sucesso". 

## Protótipo(s) de interface do CDU
