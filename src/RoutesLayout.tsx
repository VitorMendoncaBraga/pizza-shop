import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard/Dashboard";
import AppLayout from "./pages/_layouts/AppLayout";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { AuthLayout } from "./pages/_layouts/AuthLayout";
import { Orders } from "./pages/app/Orders/Orders";
import NotFound from "./pages/404";

export function RoutesLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/pedidos" element={<Orders />} />
        
      </Route>

      <Route path="/" element={<AuthLayout />} errorElement={<NotFound />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
