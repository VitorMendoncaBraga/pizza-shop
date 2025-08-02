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

  ```
   import z from 'zod'
  
   const formSchema = z.object({
     name: z.string().min(1),
      description: z.string()
    })

    type FormSchema = z.infer<typeof formSchema>
  ```

  - Utiliza esse tipo FormSchema para poder tipar os dados do formulario

  ### React Hook Form
  - Lib para formulários

  - Configurações possíveis

    ```
    import { useForm } from 'react-hook-form'

    const {register, handleSubmit} = useForm({
        // posso colocar valores padrões
        defaultValues: {
          // atributos do objeto 
        }
        // posso colocar valores para que o objeto fique de olho e atualize!
        values: {
            name: managedRestaurant?.name ?? "",
            description: managedRestaurant?.description ?? "",
        }
      })
   
    ```


  - Exemplo de uso
  ```
   import { useForm } from 'react-hook-form'
  
    const {register, handleSubmit} = useForm()
    
    async function handleForm(data: any){
        try{
          await axios.post("/auth", data)
          toast.success("Usuário autenticado com sucesso!")
        }
        catch{
          toast.error("Erro ao autenticar o usuário!")
        }
      }
    
      function MeuComponente() {
      return (
        <form onSubmit={handleSubmit(handleForm)}>
            <label>Nome</label>
            <input {...register("name")}/>
            <label>E-mail</label>
            <input {...register("email")} />
            <button type="submit">
        </form>
      )
      }

  ```

  ### React Query
  - Lib muito poderosa para requisições HTTP. Lida com cache para armazenar requisições e não precisar refaze-la

  - Configuração
  ```
   import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  
   const queryClient = new QueryClient()
  
    function App() {
    return (
      <QueryClientProvider client={queryClient}>
        {/* seu app aqui */}
      </QueryClientProvider>
    )
    }
  ```

  #### useQuery
   
   - É uma hook da lib criado para poder lidar com requisições do tipo GET
   - Recebe como parâmentro um queryKey para poder identificar aquela requisição
   - Também recebe como parâmetro o queryFn para ser a função da requisição

  ```
   import { useQuery } from '@tanstack/react-query'
    import axios from 'axios'
  
    function Exemplo() {
      const { data, isLoading, error } = useQuery({
       queryKey: ['usuarios'],
        queryFn: () => axios.get('/api/usuarios').then(res => res.data),
      })
  
      if (isLoading) return <p>Carregando...</p>
      if (error) return <p>Erro ao carregar os dados</p>
  
     return (
       <ul>
          {data.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
         ))}
        </ul>
     )
   }

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



