import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Asset Alley',
  description: 'Financing your business',
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head data-mantine-color-scheme="dark">
        <ColorSchemeScript forceColorScheme='dark'/>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider forceColorScheme='dark'>{children}</MantineProvider>
      </body>
      <GoogleAnalytics gaId='G-LBQ2VF2K5Q'/>
    </html>
  );
}
