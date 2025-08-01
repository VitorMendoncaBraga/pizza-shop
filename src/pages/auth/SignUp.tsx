import { signUp } from "@/api/sign-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";


  const signUpFormSchema = z.object({
    restaurantName: z.string().min(1, "Nome do restaurante é obrigatório"),
    managerName: z.string().min(1, "Nome do gerente é obrigatório"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    email: z.string().email("Email inválido"),
  });

  type SignUpForm = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const { register, handleSubmit, formState } = useForm<SignUpForm>();
   const navigate = useNavigate();


    const { mutateAsync: createRestaurant } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) =>{
      console.log(data)
    }
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await signUp({
        restaurantName: data.restaurantName,
        email: data.email,
        managerName: data.managerName,
        phone: data.phone
      })
      // Simula uma requisição
    } catch (error) {
      console.error("Erro ao cadastrar restaurante", error);
      toast.error(
        "Erro ao cadastrar restaurante.",
      );
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <title>Login</title>
      <Button asChild className="absolute top-8 right-8" variant={"ghost"}>
        <Link to="/sign-in">Fazer login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!{" "}
          </p>
        </div>

        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Label htmlFor="restaurantName">Nome do restaurante</Label>
          <Input
            required
            id="restaurantName"
            type="text"
            placeholder="Digite o nome do restaurante"
            {...register("restaurantName")}
          />

          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />

            <Label htmlFor="managerName">Nome do gerente</Label>
            <Input
            required
            id="managerName"
            type="text"
            placeholder="Digite o nome do gerente"
            {...register("managerName")}
          />

          <Label htmlFor="phone">Telefone</Label>
            <Input
            required
            id="phone"
            type="text"
            placeholder="Digite o telefone"
            {...register("phone")}
          />
          <Button
            disabled={formState.isSubmitting}
            type="submit"
            className="w-full cursor-pointer"
          >
            Finalizar cadastro
          </Button>
            <p className="text-sm text-muted-foreground text-center">
                Ao continuar, você concorda com nossos Termos de serviço e Política de Privacidade.
            </p>

        </form>
      </div>
    </div>
  );
}
