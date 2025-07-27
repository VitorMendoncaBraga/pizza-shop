import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
export function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInForm>();

  const signInFormSchema = z.object({
    email: z.string().email("Email inválido"),
  });

  type SignInForm = z.infer<typeof signInFormSchema>;

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Enviamos um link de autenticação para seu e-mail!", {
        action:{
          label: "Reenviar link",
          onClick: () => {
            handleSignIn(data); // Reenvia o link de autenticação
          },
        }
      }); // Simula uma requisição
    } catch (error) {
      console.error("Erro ao enviar o link de autenticação:", error);
      toast.error(
        "Credenciais inválidas. Tente novamente ou entre em contato com o suporte.",
      );
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <title>Login</title>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!{" "}
          </p>
        </div>

        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <Button
            disabled={formState.isSubmitting}
            type="submit"
            className="w-full cursor-pointer"
          >
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}
