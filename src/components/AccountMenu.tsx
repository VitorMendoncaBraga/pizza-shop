import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/getProfile";
import { getManagedRestaurant } from "@/api/getManagedRestaurant";
import { Skeleton } from "./ui/skeleton";

export function AccountMenu() {
  // UseQuery recebe uma queryKey para poder reconhecer a requisição em cache, e recebe um queryFunction, que foi criada na pasta /api
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managedRestaurant"],
      queryFn: getManagedRestaurant,
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className="flex items-center gap-2 select-none"
        >
          {isLoadingManagedRestaurant ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            managedRestaurant?.name
          )}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {isLoadingProfile ? (
           <>
             <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-32" />
           </>
          ) : (
            <>
              <span>{profile?.name}</span>
              <span className="font-sm text-muted-foreground text-xs">
                {profile?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Building className="h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="h-4 w-4 text-rose-400 dark:text-rose-500" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
