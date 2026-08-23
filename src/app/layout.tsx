import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yibeltal.dev"),
  title: "Yibeltal Birhanu — Software Developer & AI Builder",
  description:
    "Portfolio of Yibeltal Birhanu, a software developer and AI builder creating practical software systems, intelligent applications, and digital products.",
  keywords: [
    "Software Developer",
    "AI Builder",
    "Machine Learning",
    "Full-Stack Developer",
    "ASP.NET Core",
    "Python",
    "Flutter",
    "Portfolio",
  ],
  authors: [{ name: "Yibeltal Birhanu" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Yibeltal Birhanu — Software Developer & AI Builder",
    description:
      "Building practical software systems, intelligent applications, and digital products.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Yibeltal Birhanu — Software Developer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yibeltal Birhanu — Software Developer & AI Builder",
    description:
      "Building practical software systems, intelligent applications, and digital products.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
