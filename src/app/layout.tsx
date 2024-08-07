import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Mathilde Besse - Développeuse Front-end</title>
        <meta
          name="description"
          content="Développeuse web qui aime React, Tailwind, Next JS et TypeScript"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
