import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Asset Alley',
  description: 'Financing your business',
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head data-mantine-color-scheme="dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Asset Alley",
              "url": "https://www.assetalley.vercel.app",
            }),
          }}
        />
        <GoogleTagManager gtmId='GTM-NFL2BXL4'/>
        <ColorSchemeScript forceColorScheme='dark'/>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider forceColorScheme='dark'>{children}</MantineProvider>
        <Analytics/>
      </body>
      <GoogleAnalytics gaId='G-LBQ2VF2K5Q'/>
    </html>
  );
}
