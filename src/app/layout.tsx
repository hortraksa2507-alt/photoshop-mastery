import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Photoshop Mastery — Learn. Create. Master.",
  description: "The premium Photoshop learning platform for beginners to professionals.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full ${inter.variable}`}>
      <body className="h-full flex" suppressHydrationWarning>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        <AppProvider>
          <Sidebar />
          {/* Main content: ml-[72px] on desktop, ml-0 on mobile */}
          <div className="flex-1 md:ml-[72px] ml-0 flex flex-col h-screen">
            <div className="ps-stripe" />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
