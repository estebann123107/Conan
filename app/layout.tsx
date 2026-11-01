import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conan Gray – Wishbone Deluxe",
  description: "Conan Gray Official Website - Wishbone Deluxe out now",
  icons: {
    icon: "/figma-assets/brand-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-0 bg-[#09101a] text-[#f0f4f8] font-sans antialiased selection:bg-[#457490]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
