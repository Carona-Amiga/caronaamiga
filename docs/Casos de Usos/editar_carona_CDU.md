# [DCDU] Editar Carona
## Especificação de caso de uso

Histórico de revisão

| Data | Versão | Descrição | Autor |
|--|--|--|--|
| 01/2021 | 1.0 | Criação de "Editar Carona" | Mozart Maia |


## Resumo
No caso de uso "Editar Carona" o ator motorista irá editar as informações referentes a uma carona anteriormente criada.

## Atores
Motorista

## Pré-condições

 - Motorista deve estar logado
 - Carona deve ter sido criada previamente

## Pós-condições
Carona estará disponível para acesso e pesquisa por outros usuários e pelo próprio motorista com as novas informações

## Fluxo de evento
### Fluxo básico

 1. Motorista clica no botão de Caronas
 2. Sistema exibe tela de Caronas, com informações resumidas das caronas que ele já participa
 3. Motorista clica no botão de editar carona (ícone de escrita no canto inferior direito)
 4. Sistema exibe tela de formulário para edição do grupo de carona, com informações preenchidas anteriormente nos campos
 5. Motorista modifica as informações que achar necessárias e clica no botão “Aplicar”
 6. Sistema exibe pop-up com a mensagem “Informações de carona salvas” se tudo correu como esperado e retorna para tela inicial do Carona Amiga

### Fluxo de erro - Sistema não consegue salvar as informações 
Após o passo 6 do fluxo básico

 1. Sistema por algum motivo não consegue atualizar as informações no banco de dados, então exibe mensagem de erro: "Não conseguimos realizar essa ação no momento. Tente novamente mais tarde!" e retorna para tela inicial sem modificar grupo de carona

### Fluxo alternativo - Motorista deleta grupo de carona

Em qualquer momento após o passo 4 do fluxo básico

 1. Motorista clica em botão "Apagar"
 2. Sistema exibe pop-up com pergunta "Realmente deseja apagar a carona? Os dados sobre a carona não estarão mais disponíveis"
 3. Motorista clica no botão "Sim"
 4. Sistema atualiza a carona para indisponível no banco de dados

## Protótipo(s) de interface do CDU

![editar carona](https://user-images.githubusercontent.com/37476677/148703627-0fb213c6-06d0-4847-be9e-e6c832423875.png)
![caronas](https://user-images.githubusercontent.com/37476677/148703642-6e941b1c-ab0c-48e3-b894-d342868b193c.png)


