import React from 'react';

export default function SEOOptimization() {
  return (
    <>
      {/* Resource preloading for critical assets */}
      <link rel="preload" href="/images/bannerbg.jpg" as="image" />
      <link rel="preload" href="/icons/Logo.svg" as="image" />
      <link rel="preload" href="/favicon/favicon.ico" as="image" />
      
      {/* DNS prefetching for external domains */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      
      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Default language */}
      <meta httpEquiv="content-language" content="en" />
      
      {/* Viewport optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Additional SEO tags */}
      <meta name="application-name" content="Kallolsfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kallolsfolio" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
} 