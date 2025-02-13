import { JumboTitle } from './JumboTitle'
//import { InlineCodeHighlight } from '@mantine/code-highlight';
import { Anchor, Box, Container, Flex, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

type Faq = {
  value: string;
  question: ReactNode;
  answer: ReactNode;
};

const FAQ: Faq[] = [
  {
    value: 'what-is-mantine',
    question: 'What is Mantine?',
    answer:
      'Mantine is a React components library with native dark theme support and a focus on usability, accessibility and developer experience.',
  },
  {
    value: 'installation',
    question: 'How do I install Mantine?',
    answer: (
      <>
        Install Mantine using npm or yarn: code="npm install @mantine/core" {' '}
        or code="yarn add @mantine/core" . You'll also need to install its
        peer dependencies.
      </>
    ),
  },
  {
    value: 'typescript-support',
    question: 'Does Mantine support TypeScript?',
    answer:
      'Yes, Mantine is written in TypeScript and provides full type support out of the box, with no additional configuration required.',
  },
  {
    value: 'theme-customization',
    question: "Can I customize Mantine's theme?",
    answer:
      'Yes, Mantine offers a flexible theming system. You can modify colors, spacing, breakpoints, and other design tokens through the MantineProvider component.',
  },
  {
    value: 'nextjs-compatibility',
    question: 'Is Mantine compatible with Next.js?',
    answer:
      'Yes, Mantine works seamlessly with Next.js. We provide official integration packages and documentation for server-side rendering setup.',
  },
  {
    value: 'accessibility',
    question: 'Are Mantine components accessible?',
    answer:
      'All Mantine components follow WAI-ARIA standards and are tested with screen readers. They support keyboard navigation and provide ARIA attributes by default.',
  },
  {
    value: 'dark-mode',
    question: 'How does dark mode work in Mantine?',
    answer:
      'Mantine includes built-in dark mode support. You can toggle between light and dark themes using the ColorSchemeProvider and access the current theme through hooks.',
  },
  {
    value: 'component-styling',
    question: 'How can I style Mantine components?',
    answer:
      'Mantine components can be styled using the built-in styles API, CSS modules, or emotion styled components. You can also use the createStyles function for a type-safe styling experience.',
  },
  {
    value: 'responsive-design',
    question: 'How does Mantine handle responsive design?',
    answer:
      'Mantine provides responsive props on all components and a MediaQuery component for conditional rendering. You can also use predefined breakpoints or define custom ones through the theme configuration.',
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
    <Text fz="lg" fw="bold" component="blockquote" mb={4}>
      {question}
    </Text>
    <Text fz="md" component="blockquote">
      {answer}
    </Text>
  </Box>
);

export const Faq01 = () => (
  <Container
    bg="var(--mantine-color-body)"
    py={{
      base: 'calc(var(--mantine-spacing-lg))',
      xs: 'calc(var(--mantine-spacing-lg))',
      lg: 'calc(var(--mantine-spacing-lg))',
    }}
    fluid
  >
    <Container size="md">
      <Stack gap="xs" align="center">
        <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm">
          Why Get a Website Loan?
        </JumboTitle>
        {/* <Text c="dimmed" ta="center" fz="lg" style={{ textWrap: 'balance' }}>
          Can't find what you're looking for? Drop us an{' '}
          <Anchor href="#" underline="always" c="dimmed" inherit>
            email
          </Anchor>{' '}
          and our support team will assist you promptly.
        </Text> */}
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
);