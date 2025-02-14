'use client';

import { JumboTitle } from './JumboTitle'
//import { InlineCodeHighlight } from '@mantine/code-highlight';
import { Anchor, BackgroundImage, Box, Container, Flex, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

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
    value: 'defer',
    question: 'Defer Payments',
    answer:
      'Defer payments for 120 days, with no payments required in the first four months',
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
    <Text fz="xl" fw="bold" component="blockquote" mb={4} c="#01E194">
      {question}
    </Text>
    <Text fz="xl" component="blockquote" c="white">
      {answer}
    </Text>
  </Box>
);

export const Faq01 = () => (
<BackgroundImage
  src="/meeting.jpg"
  sx={(theme) => ({
    backgroundImage: 'none', // Default (no background)
    [`@media (min-width: ${theme.breakpoints.lg})`]: {
      backgroundImage: 'url(/meeting.jpg)', // Only show on large screens
    },
  })}
  >
    <Container
      py={{
        base: 'calc(var(--mantine-spacing-lg))',
        xs: 'calc(var(--mantine-spacing-lg))',
        lg: 'calc(var(--mantine-spacing-lg))',
      }}
      fluid
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px' }} // Optional: Adds contrast for readability
    >
      <Container size="md" style={{zIndex:1}}>
        <Stack gap="xs" align="center">
          <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm" c="#01E194">
            Why Get a Website Loan?
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