import { locales } from "@/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ronny Freites - Senior Software Engineer",
  description:
    "Senior Software Engineer with 9+ years of experience specializing in enterprise full-stack development, serverless architecture, and AI-powered solutions.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
