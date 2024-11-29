import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestión De Notas",
  description: "Plataforma para gestión de notas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-custom antialiased bg-primaryBlack text-neonGreen`}
        style={{ backgroundColor: '#ADD8E6' }} /* Cambia este color al que desees */
      >
        <header className="p-4 bg-forestGreen text-graySecondary text-center">
          <h1 className="text-3xl font-bold">Gestión de Notas</h1>
          <p className="text-xl">Organiza tus notas de forma eficiente</p>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-graySecondary text-primaryBlack text-center">
        </footer>
      </body>
    </html>
  );
}