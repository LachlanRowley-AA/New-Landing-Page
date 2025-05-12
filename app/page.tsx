"use client";

import { Header01 } from '@/components/Header01/header-01';
import { Welcome } from '../components/Welcome/Welcome';
import { Faq01 } from '@/components/Faq/Faq';
import { Calculator } from '@/components/Calculator/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm/AuthenticationForm';
import { Hero02 } from '@/components/Requirements/Requirements';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Footer01 } from '@/components/footer/footer';
import { IntroSection } from '@/components/Intro/intro';
import { Header } from '@/components/Header/header';
import { Container } from '@mantine/core';
import LineChart from '@/components/Chart/Chart';

export default function Shopfit() {
    return (
    <>
      <Container p={0} m={0} size="100%" bg="black">
        <MantineProvider forceColorScheme="dark">
        <Header01 />
        <Header />
        <IntroSection />
        <Faq01 />
        <Hero02 />
        <AuthenticationForm />
        <Footer01 />
        <LineChart />
        </MantineProvider>
      </Container>
    </>
  );
}
