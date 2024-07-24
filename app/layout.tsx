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
      <link rel="icon" href="../public/icons/logo.png" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
