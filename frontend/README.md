# Front-end

## Tecnologias
+ [React](https://pt-br.reactjs.org/)
+ [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

## Instalar tudo
 ```r
 npm install
 ```

## Rodar o projeto
```
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
      "typescript",
      "javascript"
  ],
 ```


