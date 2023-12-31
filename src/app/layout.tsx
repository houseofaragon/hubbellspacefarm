import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Sidebar from './sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hubbell Space Farm',
  description: 'Landing for Hubbell Space Farm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="root">
        <p className="text-4xl text-white absolute z-50">Hubbell Space Farm</p>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
