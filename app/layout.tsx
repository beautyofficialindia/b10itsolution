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
  variable: '--font-courgette', 
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://b10itsolution.vercel.app"), // Replace with your production domain
  title: {
    default: "B10 IT Solution | Enterprise Software & AI Agent Development",
    template: "%s | B10 IT Solution",
  },
  description: "B10 IT Solution delivers premium web development, mobile apps, custom enterprise software, and intelligent AI agents engineered to scale your business.",
  keywords: [
    "B10 IT Solution",
    "software development company",
    "custom web development",
    "mobile app development",
    "AI agent development",
    "enterprise software solutions",
    "Next.js developer team",
    "custom CRM systems",
    "IT consulting services"
  ],
  authors: [{ name: "B10 IT Solution Team" }],
  creator: "B10 IT Solution",
  publisher: "B10 IT Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://b10itsolution.vercel.app",
    title: "B10 IT Solution | Custom Software & AI Solutions",
    description: "Transforming ideas into robust digital products. Specializing in Web Apps, Mobile Apps, and AI-driven automation.",
    siteName: "B10 IT Solution",
    images: [
      {
        url: "/seoimage.png", 
        width: 1200,
        height: 630,
        alt: "B10 IT Solution - Software Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B10 IT Solution | Custom Software & AI Solutions",
    description: "Premium web development, enterprise software, and autonomous AI agents designed for modern scale.",
    images: ["/seoimage.png"],
  },
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