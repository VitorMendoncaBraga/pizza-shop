import { Toaster } from "sonner";
import { RoutesLayout } from "./RoutesLayout";
import { ThemeProvider } from "./components/theme/theme-provider";
export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="pizza-shop-theme">
        <Toaster richColors />
        <RoutesLayout />
      </ThemeProvider>
    </>
  );
}
