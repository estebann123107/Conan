import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="App">{children}</div>
      </body>
    </html>
  );
}
