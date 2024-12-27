import type { Metadata } from "next";
import { TimerProvider } from "@/provider/TimerContext";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Moonmoverz Telegram mini app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>
        <TimerProvider>
          {children}
          <Toaster position="bottom-left" richColors />
        </TimerProvider>
      </body>
    </html>
  );
}
