## Conhecimentos adquiridos desenvolvendo esse projeto

  ### Diferença entre pnpm e npm
  - Usando o npm sempre vai instalar todas as dependências em cada projeto individualmente
  - Já usando o pnpm vai instalar uma pasta global contendo as dependências, sendo assim, cada projeto vai somente utilizar as dependências que já foram instaladas.
  - Melhor utilizar o pnpm

  ### Sonner lib
  - Lib muito útil para usar junto ao shadcn ui para toasts
  - Fácil de configurar
  - Docs: https://sonner.emilkowal.ski/getting-started
    
## Comandos utéis para desenvolvimento

#### Configurando o linting
 - pnpm i eslint @rocketseat/eslint-config -D
 - arquivo .eslintrc.json
  ```
   {
    "extends": ["@rocketseal/eslint-config/react"]
   }
  ```

### Prettier com tailwind
 - pnpm install -D prettier prettier-plugin-tailwindcss
   - arquivo .prettier
  ```
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
  ```
  
### Plugin que organiza imports 
- pnpm i -D eslint-plugin-simple-import-sort
- arquivo .eslintrc
  ```
  {
    "plugins": ["simple-import-sort"]
    "rules": {
      "simple-import-sort/imports": "error"
    }
  }
  
  ```



