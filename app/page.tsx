import { Logos03 } from '@/components/AnimatedLogos';
import { Welcome } from '../components/Welcome/Welcome';
import { Faq01 } from '@/components/Faq';
import { Calculator } from '@/components/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm';
import { ColorSchemeButton } from '@/components/ColorScheme';
import { Hero02 } from '@/components/Requirements';

export default function HomePage() {
  return (
    <>
      <ColorSchemeButton/>
      <Welcome />
      <Calculator/>
      <Faq01/>
      <Hero02/>
      {/* <Logos03/> */}
      <AuthenticationForm/>
    </>
  );
}
