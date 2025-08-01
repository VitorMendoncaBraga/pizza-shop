import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";
export function AuthLayout() {
  return (
    <div className="grid min-h-screen xl:grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-6 w-6" />
          <span>pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <Outlet />
      </div>
    </div>
  );
}
