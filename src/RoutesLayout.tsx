import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/SignIn";
import AppLayout from "./pages/_layouts/AppLayout";
import { AuthLayout } from "./pages/_layouts/AuthLayout";

export function RoutesLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
