import { Logos03 } from '@/components/AnimatedLogos';
import { ShopWelcome } from '@/components/Welcome/ShopWelcome';
import { ShopFaq01 } from '@/components/ShopFaq';
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
      <ShopWelcome />
      <Calculator />
      <ShopFaq01 />
      <Hero02 />
      <AuthenticationForm />
      </MantineProvider>
    </>
  );
}
