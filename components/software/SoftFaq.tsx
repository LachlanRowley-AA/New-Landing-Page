'use client';

import { JumboTitle } from '../JumboTitle'
//import { InlineCodeHighlight } from '@mantine/code-highlight';
import { Anchor, BackgroundImage, Box, Container, Flex, Stack, Text, Image } from '@mantine/core';
import { ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import NextImage from 'next/image'
import image from "../../assets/Asset Alley Brandmark_ColourScreenUse.svg"

type Faq = {
  value: string;
  question: ReactNode;
  answer: ReactNode;
};

const FAQ: Faq[] = [
  {
    value: 'outlay',
    question: 'No Outlay',
    answer:
      'No need to outlay the total amount upfront',
  },
  {
    value: 'repayment-time',
    question: 'Repayment TIme',
    answer: 'Repayments are calculated over 5 years'
  },
  {
    value: 'extra-repayment',
    question: 'Optional Extra Repayments',
    answer:
      'Make extra repayments towards facility to lower monthly repayments',
  },
  {
    value: 'penalty',
    question: "Repay Anytime Without Penalty",
    answer:
    <>
      'Repay anytime without penalties and reuse the
facility for business costs that traditional lenders won’t
finance (materials, inventory, software, fit-out, etc.)'</>
  },
  {
    value: 'charge',
    question: 'Only Charge on Use',
    answer:
      'No charge if setup but not used',
  },
  {
    value: 'security',
    question: 'No Additional Security Needed',
    answer:
    <>  'No additional security required (personal property or
assets within the business)'</>
  },
  {
    value: 'cost',
    question: 'Cost',
    answer:
      'Only pay 1.1 - 1.5% interest per month',
  },
  {
    value: 'setup',
    question: 'No Setup Cost',
    answer:
      'No setup cost or ongoing fees',
  },
];

const FaqCell = ({ question, answer }: Faq) => (
  <Box
    p={{
      base: 'xl',
      lg: 'calc(var(--mantine-spacing-lg) * 2)',
    }}
    w={{
      base: '100%',
      lg: '33.333%',
    }}
  >
    <Flex justify="left" align="left" direction="row" wrap="nowrap">
        <Image
        component={NextImage}
        src={image}
        alt="Logo"
        style={{ width: '2em', height: '2em', marginRight: '0.5em' }}
          />
      <Text fz="xl" fw="bold" component="blockquote" mb={4} c="#01E194">
        {question}
      </Text>
    </Flex>
    <Text fz="xl" component="blockquote" c="white">
      {answer}
    </Text>
  </Box>
);

export const SoftFaq = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
  <BackgroundImage
  src={isDesktop ? "/meeting.jpg" : ""} // Load image only on desktop
  style={{
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Always keep the dark overlay
    backgroundImage: isDesktop
      ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/meeting.jpg)'
      : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  >
    <Container
      py={{
        base: 'calc(var(--mantine-spacing-lg))',
        xs: 'calc(var(--mantine-spacing-lg))',
        lg: 'calc(var(--mantine-spacing-lg))',
      }}
      fluid
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px' }}
    >
      <Container size="md" style={{zIndex:1}}>
        <Stack gap="xs" align="center">
          <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm" c="#01E194">
            Why Get a Loan For Your Software?
          </JumboTitle>
        </Stack>
      </Container>
      <Container size="xl">
        <Flex mt="calc(var(--mantine-spacing-lg) * 3)" wrap="wrap" justify="center">
          {FAQ.map((faq) => (
            <FaqCell key={faq.value} {...faq} />
          ))}
        </Flex>
      </Container>
    </Container>
  </BackgroundImage>
  );
};