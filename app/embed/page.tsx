'use client';

import { Logos03 } from '@/components/AnimatedLogos';
import { Welcome } from '@/components/EmbedComponents/EWelcome';
import { Faq01 } from '@/components/EmbedComponents/EFaq';
import { Calculator } from '@/components/EmbedComponents/ECalculator';
import { AuthenticationForm } from '@/components/EmbedComponents/EAuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/EmbedComponents/ERequirements';
import { colorsTuple, createTheme, MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react';

// Define the type for the URL parameters state
type Params = {
  mode: string;
  darkMode: boolean;
  backgroundColor: string;
  headerTextColor: string;
  smallTextColor: string;
  tertiaryTextColor: string;
  buttonColor: string;
  unfilledBarColor: string;
};

export default function Main() {
  // State to store URL parameters with type definition
  const [params, setParams] = useState<Params>({
    mode: 'default',
    darkMode: false,
    backgroundColor: '#242424',
    headerTextColor: '#DDDDDD',
    smallTextColor: '#FFFFFF',
    tertiaryTextColor: '#000000',
    buttonColor: '#FFFFFF',
    unfilledBarColor: '#848484',
  });

  // useEffect to fetch and update URL parameters when the component mounts
  useEffect(() => {
    // Utility function to fetch URL parameters with defaults
    function getUrlParams(): Params {
      if (typeof window === 'undefined') {return {
        mode: 'default',
        darkMode: false,
        backgroundColor: '#242424',
        headerTextColor: '#DDDDDD',
        smallTextColor: '#FFFFFF',
        tertiaryTextColor: '#000000',
        buttonColor: '#FFFFFF',
        unfilledBarColor: '#848484',
      }; // return default values for SSR
      }

      const params = new URLSearchParams(window.location.search || {});
      return {
        mode: params.get('mode') || 'default',
        darkMode: params.get('darkMode') === 'true',
        backgroundColor: params.get('bgColor') || '#242424',
        headerTextColor: params.get('headerColor') || '#DDDDDD',
        smallTextColor: params.get('smallTextColor') || '#FFFFFF',
        tertiaryTextColor: params.get('tertiaryTextColor') || '#000000',
        buttonColor: params.get('buttonColor') || '#FFFFFF',
        unfilledBarColor: params.get('unfilledBarColor') || '#848484',
      };
    }

    // Set the URL parameters to state
    const fetchedParams = getUrlParams();
    setParams(fetchedParams);
  }, []); // Empty dependency array ensures this runs only on mount

  // Create theme dynamically based on parameters
  const theme = createTheme({
    colors: {
      green: colorsTuple('#01E194'),
      dark: colorsTuple('#FFFFFF'), // Dark mode color
      light: colorsTuple(params.backgroundColor), // Light mode color
      header: colorsTuple(params.headerTextColor), // Header text color
      secondary: colorsTuple(params.smallTextColor), // Small text color
      tertiary: colorsTuple(params.tertiaryTextColor),
      button: colorsTuple(params.buttonColor),
      background: colorsTuple(params.backgroundColor),
      unfilledBar: colorsTuple(params.unfilledBarColor),
    },
    primaryColor: 'green',
    defaultRadius: 'md',
    components: {
      Button: {
        defaultProps: {
          color: 'dark', // Apply to buttons by default
        },
        styles: (theme: any) => ({
          root: {
            backgroundColor: theme.colors.green[6],
            '&:hover': { backgroundColor: theme.colors.green[7] },
          },
        }),
      },
    },
  });

  return (
    <MantineProvider theme={theme}>
      <Welcome darkMode={params.darkMode} />
      <Calculator />
      {params.mode === 'full' && <Faq01 />}
      <Hero02 />
      <AuthenticationForm />
    </MantineProvider>
  );
}
