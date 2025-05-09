import { Logos03 } from '@/components/AnimatedLogos';
import { ITWelcome } from '@/components/it/ItWelcome';
import { ITFaq } from '@/components/it/ItFaq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Footer01 } from '@/components/footer/footer';
export default function Shopfit() {
    return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider forceColorScheme="dark">
      <ITWelcome />
      <Calculator />
      <ITFaq />
      <Hero02 />
      <AuthenticationForm />
      </MantineProvider>
      <Footer01 />
    </>
  );
}
