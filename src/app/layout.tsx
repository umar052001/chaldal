import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Chaldal | Admin Panel',
  description: 'This is a administration panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
