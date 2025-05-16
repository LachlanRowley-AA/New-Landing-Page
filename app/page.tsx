"use client";

import { Header01 } from '@/components/Header01/header-01';
import { Welcome } from '../components/Welcome/Welcome';
import { Faq01 } from '@/components/Faq/Faq';
import { Calculator } from '@/components/Calculator/Calculator';
import { AuthenticationForm } from '@/components/AuthenticationForm/AuthenticationForm';
import { Hero02 } from '@/components/Requirements/Requirements';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { Footer01 } from '@/components/footer/footer';
import { IntroSection } from '@/components/Intro/intro';
import { Header } from '@/components/Header/header';
import LineChart from '@/components/Chart/Chart';
import { Why } from '@/components/Why/Why';

export default function Shopfit() {
    return (
    <>
      <meta name="google-site-verification" content="al92wOwp3aihPg_ETzB1Hp_EKOFbUlLV0ksliylL_Po" />
      <Container px={0} mx={0} size="100%" bg="black">
        <Header01 />
        <Header />
        <section id="benefits"><Calculator /></section>
        <section><Why /></section>
        <Faq01 />
        <section id="requirements"><Hero02 /></section>
        <section id="contact"><AuthenticationForm /></section>
        <Footer01 />
      </Container>
    </>
  );
}
