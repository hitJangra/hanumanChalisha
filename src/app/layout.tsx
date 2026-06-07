import type { Metadata } from "next";
import { Merienda, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-merienda",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-tiro",
});

export const metadata: Metadata = {
  title: "Shree Hanuman Chalisa",
  description: "Read the Shree Hanuman Chalisa in a beautiful, immersive, and interactive experience.",
  openGraph: {
    title: "Shree Hanuman Chalisa",
    description: "Read the Shree Hanuman Chalisa in a beautiful, immersive, and interactive experience.",
    images: ["https://images.unsplash.com/photo-1604500986228-569614db2543?q=80&w=1200&auto=format&fit=crop"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merienda.variable} ${tiro.variable}`}>
      {/* Removed the hardcoded bg and text colors. globals.css will handle this now! */}
      <body className="font-merienda antialiased">
        {children}
      </body>
    </html>
  );
}