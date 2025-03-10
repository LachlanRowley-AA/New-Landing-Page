import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Asset Alley',
  description: 'Financing your business',
};

const gtag = `https://www.googletagmanager.com/gtag/js?id=G-DRKNK91FMY`;

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head data-mantine-color-scheme="dark">
      <script async src={gtag} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DRKNK91FMY', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
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
    </html>
  );
}
