import type { Metadata } from "next";
import { Prata, Open_Sans, Courgette } from "next/font/google";
import "./globals.css";

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata', 
});
const courgette = Courgette({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata', 
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "B10itSolution",
  description: "we grow web project from roots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${openSans.variable} ${courgette.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}