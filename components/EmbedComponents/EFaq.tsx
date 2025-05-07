'use client';

import { JumboTitle } from '../JumboTitle';
import { Anchor, BackgroundImage, Box, Container, Flex, Stack, Text, Image, useMantineTheme } from '@mantine/core';
import { ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import NextImage from 'next/image';
import image from "../../assets/Asset Alley Brandmark_ColourScreenUse.svg";

type Faq = {
  value: string;
  question: ReactNode;
  answer: ReactNode;
};

const FAQ: Faq[] = [
  { value: 'outlay', question: 'No Outlay', answer: 'No need to outlay the total amount upfront' },
  { value: 'repayment-time', question: 'Repayment Time', answer: 'Repayments are calculated over 5 years' },
  { value: 'extra-repayment', question: 'Optional Extra Repayments', answer: 'Make extra repayments towards facility to lower monthly repayments' },
  { value: 'penalty', question: "Repay Anytime Without Penalty", answer: 'Repay anytime without penalties and reuse the facility for business costs that traditional lenders won’t finance (materials, inventory, software, fit-out, etc.)' },
  { value: 'charge', question: 'Only Charge on Use', answer: 'No charge if setup but not used' },
  { value: 'security', question: 'No Additional Security Needed', answer: 'No additional security required (personal property or assets within the business)' },
  { value: 'cost', question: 'Cost', answer: 'Only pay 1.1 - 1.5% interest per month' },
  { value: 'setup', question: 'No Setup Cost', answer: 'No setup cost or ongoing fees' },
];

const FaqCell = ({ question, answer, customLogo }: { question: ReactNode; answer: ReactNode; customLogo: boolean }) => (
  <Box p={{ base: 'xl', lg: 'calc(var(--mantine-spacing-lg) * 2)' }} w={{ base: '100%', lg: '33.333%' }}>
    <Flex justify="left" align="left" direction="row" wrap="nowrap">
      {customLogo && (
        <Image component={NextImage} src={image} alt="Logo" style={{ width: '2em', height: '2em', marginRight: '0.5em' }} />
      )}
      <Text fz="xl" fw="bold" component="blockquote" mb={4} c="#01E194">
        {question}
      </Text>
    </Flex>
    <Text fz="xl" component="blockquote" c="white">
      {answer}
    </Text>
  </Box>
);

export function Faq01({ businessType, customLogo }: { businessType: string | null; customLogo: boolean }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const theme = useMantineTheme();
  let text = '';

  switch (businessType) {
    case 'website':
      text = 'Website and Apps';
      break;
    case 'shopfit':
      text = 'Shop Fitout';
      break;
    case 'materials':
      text = 'Building Materials'
      break;
    case 'software':
      text = 'Software'
      break;
    default:
      text = 'ERROR: Missing aaBusinessType';
  }

  return (
    <BackgroundImage
      src={isDesktop ? "/meeting.jpg" : ""}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundImage: isDesktop
          ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/meeting.jpg)'
          : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container py={{ base: 'calc(var(--mantine-spacing-lg))', xs: 'calc(var(--mantine-spacing-lg))', lg: 'calc(var(--mantine-spacing-lg))' }} fluid style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px' }}>
        <Container size="md" style={{ zIndex: 1 }}>
          <Stack gap="xs" align="center">
            <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm" c="#01E194">
              Why Get a Loan For Your {text}?
            </JumboTitle>
          </Stack>
        </Container>
        <Container size="xl">
          <Flex mt="calc(var(--mantine-spacing-lg) * 3)" wrap="wrap" justify="center">
            {FAQ.map((faq) => (
              <FaqCell key={faq.value} customLogo={customLogo} {...faq} />
            ))}
          </Flex>
        </Container>
      </Container>
    </BackgroundImage>
  );
}
