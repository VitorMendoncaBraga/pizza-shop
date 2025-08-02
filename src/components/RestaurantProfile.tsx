// RestaurantPerfil.tsx
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getManagedRestaurant } from "@/api/getManagedRestaurant";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { updateRestaurantProfile } from "@/api/update-profile";
export function RestaurantProfile() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managedRestaurant"],
    queryFn: getManagedRestaurant,
  });

  const restaurantProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
  });
  console.log(managedRestaurant);

  type RestaurantProfileSchema = z.infer<typeof restaurantProfileSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RestaurantProfileSchema>({
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateRestaurantProfile,
  });

  async function handleUpdateProfile(data: RestaurantProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });
      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Falha ao atualizar o perfil! Tente novamente");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label>Nome</Label>
            <Input {...register("name")} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Descrição</Label>
            <Textarea {...register("description")} />
          </div>
        </div>

        <DialogFooter className="mt-5">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="outline" type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
