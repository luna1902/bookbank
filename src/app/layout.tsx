//shared ui for a segment and its children is represented through this layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kitabghr',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}</body>
    </html>
  )
}
