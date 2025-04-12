import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import SEOOptimization from '@/ui/SEOOptimization';
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Kallolsfolio | Expert Tech Talent Solutions',
    template: '%s | Kallolsfolio'
  },
  description: 'Connect with top tech talent for your next big project. Kallolsfolio helps you find and collaborate with the best developers, designers, and tech experts.',
  keywords: ['website developer', 'frontend developer', 'backend developer', 'full stack developer', 'tech recruitment', 'kallol', 'software engineers', 'UI/UX designers'],
  authors: [{ name: 'Kallolsfolio Team' }],
  creator: 'Kallolsfolio',
  publisher: 'Kallolsfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kallolsfolio.com',
    title: 'Kallolsfolio | Expert Tech Talent Solutions',
    description: 'Connect with top tech talent for your next big project.',
    siteName: 'Kallolsfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kallolsfolio - Connect with top tech talent'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallolsfolio | Expert Tech Talent Solutions',
    description: 'Connect with top tech talent for your next big project.',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://kallolsfolio.com',
  },
  metadataBase: new URL('https://kallolsfolio.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <head>
        {/* Favicon - simple approach */}
        <link rel="icon" href="/favicon.ico" />
        <SEOOptimization />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* External stylesheets */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased bg-transparent font-dm-sans">
        {children}
      </body>
    </html>
  );
}
