import { Toaster } from "sonner";
import { RoutesLayout } from "./RoutesLayout";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="pizza-shop-theme">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RoutesLayout />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
