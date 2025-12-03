'use client';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { AuthenticationForm } from '@/components/AuthenticationForm/AuthenticationForm';
import { Calculator } from '@/components/Calculator/Calculator';
import LineChart from '@/components/Chart/Chart';
import { Faq01 } from '@/components/Faq/Faq';
import { Footer01 } from '@/components/footer/footer';
import { Header } from '@/components/Header/header';
import { Header01 } from '@/components/Header01/header-01';
import { IntroSection } from '@/components/Intro/intro';
import { Hero02 } from '@/components/Requirements/Requirements';
import { Why } from '@/components/Why/Why';
import { Welcome } from '../components/Welcome/Welcome';

export default function Shopfit() {
  return (
    <>
      <meta name="google-site-verification" content="yaIg2xfvwkvjSSLDlih1AlITPuAABOkunRNMeFn0evU" />
      <Container px={0} mx={0} size="100%" bg="black">
        <Header01 />
        <Header />
        <section id="benefits">
          <Calculator />
        </section>
        <section>
          <Why />
        </section>
        <Faq01 />
        <section id="requirements">
          <Hero02 />
        </section>
        <section id="contact">
          <AuthenticationForm />
        </section>
        <Footer01 />
      </Container>
    </>
  );
}
