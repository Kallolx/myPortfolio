import React from 'react';

export default function FaviconConfig() {
  return (
    <>
      {/* Standard Icons */}
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
      
      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
      
      {/* Android Icons */}
      <link rel="icon" href="/favicon/android-chrome-192x192.png" sizes="192x192" type="image/png" />
      <link rel="icon" href="/favicon/android-chrome-512x512.png" sizes="512x512" type="image/png" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/favicon/site.webmanifest" />
      
      {/* Theme colors */}
      <meta name="theme-color" content="#090245" />
      <meta name="msapplication-TileColor" content="#090245" />
    </>
  );
} 