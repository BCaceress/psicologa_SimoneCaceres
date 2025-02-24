// src/app/layout.tsx
import "@/styles/globals.css";

export const metadata = {
  title: "Psicóloga Simone Caceres",
  description: "Especializada em Crianças e Adolescentes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
