import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { queryClient } from "@/lib/query-client";
import { NAV_THEME } from "@/lib/theme";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? NAV_THEME.dark : NAV_THEME.light}>
        <Stack />
        <PortalHost />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
