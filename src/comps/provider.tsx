"use client";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{ dir: "rtl" }}
      >
        {children}
      </MantineProvider>
    </SessionProvider>
  );
};

export default Provider;
