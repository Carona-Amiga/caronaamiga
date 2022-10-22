# Project Guidelines

## Git workflow

+ Checkout para uma nova branch feature/bug-fix
```
git checkout -b <branch-name>
```

+ Faça as alterações
```
git add <file1>
git commit -m "<message>"
```

_É interessante que faça mensagens de commits por arquivo e definindo o que foi realizado e o porquê da mudança_

+ Sincronize com as últimas mudanças no repositório remoto
```
git checkout main
git pull origin main
```

+ Atualize sue *feature branch* com as ultimas alterações da **main** usando rebase iterativo
```
git checkout <branch-name>
git rebase -i main
```

+ Se você não tem conflitos, pule esse passo. Se você tem conflitos, resolva-os e continue onrebase
```
git add <file1> <file2> ...
git rebase --continue
```

+ Push sua branch (feature branch).
```
git push --force-with-lease origin <branch-name>
```

+ Abra um Pull Request

+ Pull Request deve ser aceito, mergiado e fechado por quem estiver revisando

+ Delete seu branch **local** se tiver terminado

## Issues

Uma issue deve ser criada para qualquer atualização no repositório, nova funcionalidade, recursos de tecnologia, etc.

+ Template (em Markdown)

```markdown
## Descrição

Explique o problema que está ocorrendo ou funcionalidade que queira que seja implementada.

### Detalhes

 + Seja o mais detalhado possível, de preferência pode colocar código para se necessário. 
 + Dê exemplos e seja o mais específico possível.
```

+ Atribuição de Issues

Ao decidir fazer alguma funcionalidade, documentação ou algum `hotfix`, faça:

 + Atribua a issue ao seu usuário no Github
 + Cria uma branch a partir da branch principal (`main`) para a issue (pra somente ela!)
 + Crie uma Pull Request ([O que é uma Pull Request](https://pt.stackoverflow.com/a/200786)) e descreva o que foi feito, e lá poderá ser discutido melhorias e até mudanças necessárias
 + E quando a funcionalidade, correção, etc estiver pronta ou **merge** poderá ser feito

    *É possível que tenha `conflitos` no entre a branch principal (`main`) e a branch da feature. Nisso será necessário ver o passo a passo do __Git Workflow__ no comando `git rebase` que solucione os conflitos*

 + A branch de feature deve ser apagada uma vez dado **merge**

+ Kanban

O **Kanban** será utilizado para organização de tarefas e de **sprint** do projeto. Dividido em 5 colunas: 
 + `Resource + Ideas` para issues sobre materiais de estudo, tecnologias, documentação, cursos, também como ideias de implementação e escolhas de tecnologia para o projeto para resolver alguma solução.
 + `New` para novas issues criadas sem atribuição a nenhum integrante do time de desenvolvimento.
 + `Backlog` para issues com atribuição a algum integrante do time de desenvolvimento, normalmente durante uma sprint.
 + `In progress` para issues em progresso, não finalizadas.
 + `Done` para issues finalizadas e com sua branch já te realizado **merge** na branch principal `main`

## API Design

+ Utilizar o padrão orientado a recursos

```
Bad

GET /get-students
```

```
Good

GET /students
```

+ Usar kebad-case para as URLs

```
Bad

GET /questionRequests
```

```
Good

GET /question-requests
```

+ Usar camelCase para os parâmetros na query ou campo de recursos

```
Bad

GET /question-requests?my-query=value
```

```
Good

GET /question-requests?myQuery=value
```

```
Bad

POST /question-requests
{
  "content": "question",
  "user_id": "user_id"
}
```

```
Good

POST /question-requests
{
  "content": "question",
  "userId": "userId"
}
```

+ Usar o plural para nomear os recursos
```
Bad

GET /user
```

```
Good

GET /users
```

+ Não use verbos para as URLs de recursos

```
Bad

GET /translate?text=Hello
```

```
Good

GET /translation?text=Hello
```
+ Utilize os métodos HTTP para especificar as operações
  + GET: Para obter/recuperar recurso
  + POST: Para criar um novo recurso ou sub-recurso
  + PUT: Para atualizar recursos existentes
  + DELETE: Para deletar um recurso existente
