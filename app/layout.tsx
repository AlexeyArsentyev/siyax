import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Siya',
  description: 'Siya - your only indie game store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
