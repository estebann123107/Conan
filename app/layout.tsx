import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { bold } from "next/dist/lib/picocolors";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conan Gray",
  description: "Conan Gray Official Website",
  icons: {
    icon: "/Miniatura.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`m-0 bg-site-bg ${nunito.className} font-semibold`}>
        {children}
      </body>
    </html>
  );
}
