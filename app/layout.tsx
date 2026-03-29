import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
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
  title: "Websetgo | High-Performance Web Development for Small Businesses",
  description: "Websetgo helps small businesses dominate online with professional web design, high-performance web development, and top-tier SEO strategies.",
  keywords: ["web development", "small business website", "SEO optimization", "web design", "digital growth"],
  authors: [{ name: "Websetgo" }],
  openGraph: {
    title: "Websetgo | High-Performance Web Development",
    description: "Empowering small businesses with results-driven web solutions.",
    url: "https://websetgo.com",
    siteName: "Websetgo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Websetgo - Digital Growth Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websetgo | High-Performance Web Development",
    description: "Empowering small businesses with results-driven web solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
