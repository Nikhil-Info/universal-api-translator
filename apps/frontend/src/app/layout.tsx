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
    default: "Universal API Translator - AI-Powered API Conversion & SDK Generation",
    template: "%s | Universal API Translator"
  },
  description: "Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC. Auto-generate SDKs in Node, Python, Go, Java, C#. Type-safe, standards-compliant, CI/CD ready.",
  applicationName: "Universal API Translator",
  keywords: [
    "API translator",
    "API converter",
    "OpenAPI to GraphQL",
    "REST to gRPC",
    "SOAP to REST",
    "SDK generation",
    "API documentation",
    "GraphQL schema",
    "gRPC protocol buffers",
    "AI API conversion",
    "TypeScript SDK",
    "Python SDK",
    "API migration",
    "WSDL converter",
    "OpenAPI 3.1",
    "API automation"
  ],
  authors: [{ name: "Universal API Translator Team" }],
  creator: "Universal API Translator",
  publisher: "Universal API Translator",
  metadataBase: new URL('https://universal-api-translator.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://universal-api-translator.com",
    title: "Universal API Translator - AI-Powered API Conversion",
    description: "Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC. Auto-generate SDKs in multiple languages.",
    siteName: "Universal API Translator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Universal API Translator - AI-Powered API Conversion',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal API Translator - AI-Powered API Conversion",
    description: "Transform APIs seamlessly. Convert between OpenAPI, GraphQL, SOAP, gRPC. Auto-generate SDKs.",
    creator: "@universalapi",
    images: ['/og-image.png'],
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
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
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
