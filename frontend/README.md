# Front-end

## Tecnologias
+ [React](https://pt-br.reactjs.org/)
+ [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
+ [Vite](https://vitejs.dev/)

## Instalar tudo
 ```r
 #Instalação padrão
 npm install
 
 #Forçar instalação
 npm install --force
 ```

## Configurar variáveis de ambiente

Um arquivo de exemplo estará pronto em `.env.sample`. Faça uma copia do arquivo `.env.sample`, renomeie para `.env`.

```
VITE_API_URL=api_url
ESLINT_NO_DEV_ERRORS=true
```

A variável `VITE_API_URL` será onde estará as rotas do backend. Nesse projeto as rotas estarão em `http://localhost:8000/api` em ambiente de desenvolvimento.

## Rodar o projeto em desenvolvimento
```bash
# Projeto estará rodando em http://localhost:3000
npm run dev
```

## Build para produção
```
npm run build
```

## Configurar ESLint

Se usando VSCode:

 + Disabilitar VSCode *format*.

 ```json
 "javascript.format.enable": false,
 ```
 
 + Instalar ESLint Extension

 + Definir ESLint como *linter*
 ```json
 "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
 ```

 + Definir como *linter* do Javascript
 ```json
 "eslint.validate": [
      "javascript",
      "javascriptreact"
  ],
 ```


