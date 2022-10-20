# [DCDU] Oferecer Carona
## Especificação de caso de uso

Histórico de revisão

| Data | Versão | Descrição | Autor |
|--|--|--|--|
| 01/2021 | 1.0 | Criação de "Criar Carona" | Mozart Maia |


## Resumo
No caso de uso Criar Carona o ator motorista irá criar um grupo denominado de forma geral no projeto como “carona”, onde poderá colocar informações sobre a carona e torná-las públicas para outros usuários do sistema Carona Amiga.

## Atores
Motorista

## Pré-condições

 - Motorista deve estar logado
 - Motorista deve ter informações sobre Carteira Nacional de Habilitação cadastradas no perfil

## Pós-condições
Carona estará disponível para acesso e pesquisa por outros usuários e pelo próprio motorista em sua tela “Caronas

## Fluxo de evento
### Fluxo básico

 1. Motorista clica no botão de Caronas
 2. Sistema exibe tela de Caronas, com informações resumidas das caronas que ele já participa e se apresenta um botão a direita “+” para acrescentar novas caronas e ![Motorista clica no botão “+”](prototipos/), exibindo tela de formulário para cadastro de novo grupo de carona
 3. Motorista preenche as informações requisitadas no formulário e clica no botão “Oferecer carona”
 4. Sistema verifica as informações preenchidas e do motorista, depois exibe pop-up com a mensagem “Nova carona criada” se tudo correu como esperado e retorna para tela inicial do Carona Amiga

### Fluxo de erro - CNH não cadastrada
Após o passo 3 do fluxo básico

 1. Sistema verifica que o motorista não possui CNH registrada no Carona Amiga, exibe mensagem de erro "CNH não cadastrada no perfil" e retorna para tela inicial sem criar grupo de carona.

### Fluxo alternativo - Motorista não lembra do CEP

Durante o passo 2 do fluxo básico

 1. Motorista na hora de preencher clica em "Não lembro do CEP"
 2. Sistema o redireciona para o "busca CEP do correios"

## Protótipo(s) de interface do CDU

![cadastrar carona](https://user-images.githubusercontent.com/37476677/148703094-7dcbd475-8947-4c01-8247-57a9f89b6ff9.png)
![caronas](https://user-images.githubusercontent.com/37476677/148703149-8899b680-d417-4bb4-934b-27f712816346.png)

