import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Universal API Translator - AI-Powered API Conversion",
    template: "%s | Universal API Translator"
  },
  description: "Convert between OpenAPI, GraphQL, SOAP, gRPC and more with AI-powered intelligence. Generate SDKs, validate specifications, and streamline your API workflow.",
  keywords: ["API", "translator", "converter", "OpenAPI", "GraphQL", "SOAP", "gRPC", "SDK generation", "API documentation", "REST API", "API design"],
  authors: [{ name: "Universal API Translator Team" }],
  creator: "Universal API Translator",
  publisher: "Universal API Translator",
  metadataBase: new URL('https://universal-api-translator.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://universal-api-translator.com",
    title: "Universal API Translator - AI-Powered API Conversion",
    description: "Convert between OpenAPI, GraphQL, SOAP, gRPC and more with AI-powered intelligence.",
    siteName: "Universal API Translator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal API Translator",
    description: "AI-powered API conversion and SDK generation",
    creator: "@universalapi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, geistMono.variable, "min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto w-full max-w-[1350px] flex flex-col min-h-screen border-x">
            <SiteHeader />
            <main className="flex-1 pt-32">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
