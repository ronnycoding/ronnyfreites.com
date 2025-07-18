import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronny Freites - Senior Software Engineer",
  description: "Senior Software Engineer with 9+ years of experience specializing in enterprise full-stack development, serverless architecture, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" data-theme="dark">
      <body style={{ overflowX: 'hidden' }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
