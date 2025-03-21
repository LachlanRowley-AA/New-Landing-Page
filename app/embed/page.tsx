'use client';

import { Logos03 } from '@/components/AnimatedLogos';
import { Welcome } from '@/components/EmbedComponents/EWelcome';
import { Faq01 } from '@/components/EmbedComponents/EFaq';
import { Calculator } from '@/components/EmbedComponents/ECalculator';
import { AuthenticationForm } from '@/components/EmbedComponents/EAuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/EmbedComponents/ERequirements';
import { colorsTuple, createTheme, MantineProvider } from '@mantine/core';
import { useEffect } from 'react';

// Utility function to fetch URL parameters with defaults
function useUrlParams() {
  const params = new URLSearchParams(window.assetAlleyConfig || {});
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

const { 
  mode, 
  darkMode, 
  backgroundColor, 
  headerTextColor, 
  smallTextColor, 
  tertiaryTextColor, 
  buttonColor, 
  unfilledBarColor 
} = useUrlParams();

// Create theme dynamically based on parameters
const theme = createTheme({
  colors: {
    green: colorsTuple('#01E194'),
    dark: colorsTuple('#FFFFFF'), // Dark mode color
    light: colorsTuple(backgroundColor), // Light mode color
    header: colorsTuple(headerTextColor), // Header text color
    secondary: colorsTuple(smallTextColor), // Small text color
    tertiary: colorsTuple(tertiaryTextColor),
    button: colorsTuple(buttonColor),
    background: colorsTuple(backgroundColor),
    unfilledBar: colorsTuple(unfilledBarColor),
  },
  primaryColor: 'green',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        color: 'dark', // Apply to buttons by default
      },
      styles: (theme : any) => ({
        root: {
          backgroundColor: theme.colors.green[6],
          '&:hover': { backgroundColor: theme.colors.green[7] },
        },
      }),
    },
  },
});

export default function Main() {
  return (
    <MantineProvider theme={theme}>
      <Welcome darkMode={darkMode} />
      <Calculator />
      {mode === 'full' && <Faq01 />}
      <Hero02 />
      <AuthenticationForm />
    </MantineProvider>
  );
}
