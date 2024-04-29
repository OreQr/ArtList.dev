import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui-library/toaster";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body>
        <Providers>{children}</Providers>

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
