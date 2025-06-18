import { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexView AI – Interview Smarter",
  description:
    "NexView AI is an intelligent interview platform that helps candidates and companies prepare, analyze, and improve interviews with the power of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased pattern`}>
        {children}
        <Toaster richColors position="top-left" />
      </body>
    </html>
  );
}
