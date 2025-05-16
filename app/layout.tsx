import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Script from 'next/script';

export const metadata = {
  title: 'Website Financing Options',
  description: 'Finance your websites with Asset Alley',
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head data-mantine-color-scheme="dark">
        <ColorSchemeScript forceColorScheme='dark'/>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="google-site-verification" content="al92wOwp3aihPg_ETzB1Hp_EKOFbUlLV0ksliylL_Po" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider forceColorScheme='dark'>{children}</MantineProvider>
      </body>
    </html>
  );
}
