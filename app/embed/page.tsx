'use client';

import { Logos03 } from '@/components/AnimatedLogos';
import { Welcome } from '@/components/EmbedComponents/Welcome';
import { Faq01 } from '@/components/Faq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useEffect } from 'react';

const params = new URLSearchParams(window.location.search);
const setDisplay = params.get('mode');
const darkMode = params.get('darkMode');

export default function Shopfit() {
    return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
      <Welcome darkMode={darkMode}/>
      <Calculator />
      {setDisplay === 'full' && <Faq01 />
      }
      <Hero02 /> 
      <AuthenticationForm />
      </MantineProvider>
    </>
  );
}
