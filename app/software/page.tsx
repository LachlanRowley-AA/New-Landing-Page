import { Logos03 } from '@/components/AnimatedLogos';
import { SoftWelcome } from '@/components/software/SoftWelcome';
import { SoftFaq } from '@/components/software/SoftFaq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
export default function Shopfit() {
    return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
      <SoftWelcome />
      <Calculator />
      <SoftFaq />
      <Hero02 />
      <AuthenticationForm />
      </MantineProvider>
    </>
  );
}
