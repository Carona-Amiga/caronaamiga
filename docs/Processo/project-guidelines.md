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
git checkout develop
git pull origin develop
```

+ Atualize sue *feature branch* com as ultimas alterações da **develop** usando rebase iterativo
```
git checkout <branch-name>
git rebase -i develop
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
