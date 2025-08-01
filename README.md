## Conhecimentos adquiridos desenvolvendo esse projeto

  ### Diferença entre pnpm e npm
  - Usando o npm sempre vai instalar todas as dependências em cada projeto individualmente
  - Já usando o pnpm vai instalar uma pasta global contendo as dependências, sendo assim, cada projeto vai somente utilizar as dependências que já foram instaladas.
  - Melhor utilizar o pnpm

  ### Sonner lib
  - Lib muito útil para usar junto ao shadcn ui para toasts
  - Fácil de configurar
  - Docs: https://sonner.emilkowal.ski/getting-started

  ### Zod
  - Lib para validação 

  ### React Hook Form
  - Lib para formulários

  ### React Query
  - Lib muito poderosa para requisições HTTP. Lida com cache para armazenar requisições e não precisar refaze-la

  - Configuração
  ```
  ` import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  `
  ` const queryClient = new QueryClient()
  `
  `  function App() {
  `  return (
  `    <QueryClientProvider client={queryClient}>
  `      {/* seu app aqui */}
  `    </QueryClientProvider>
  `  )
  `  }
  ```

  #### useQuery
   
   - É uma hook da lib criado para poder lidar com requisições do tipo GET
   - Recebe como parâmentro um queryKey para poder identificar aquela requisição
   - Também recebe como parâmetro o queryFn para ser a função da requisição

  ```
  ` import { useQuery } from '@tanstack/react-query'
  `  import axios from 'axios'
  `
  `  function Exemplo() {
  `    const { data, isLoading, error } = useQuery({
  `      queryKey: ['usuarios'],
  `      queryFn: () => axios.get('/api/usuarios').then(res => res.data),
  `    })
  `
  `    if (isLoading) return <p>Carregando...</p>
  `    if (error) return <p>Erro ao carregar os dados</p>
  `
  `    return (
  `      <ul>
  `        {data.map(usuario => (
  `          <li key={usuario.id}>{usuario.nome}</li>
  `        ))}
  `      </ul>
  `    )
  `  }

  ```



  ### Rechart
  - Lib de gráficos
    
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



