import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ronny Freites - Full-Stack Product Engineer',
  description:
    'AI-Powered Product Builder | Content Creator for Software Engineers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
