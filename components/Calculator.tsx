'use client';

import { AnimatedCounter, AnimatedCounterProps } from './AnimatedCounter';
import { JumboTitle } from './JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem, TextInput, Slider } from '@mantine/core';
import { motion } from 'motion/react';
import { useState } from 'react';

const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const WEEKS_IN_YEAR = 52;
const LOAN_TERM_YEARS = 5; // Placeholder loan term in years

const calculateWeeklyRepayment = (loanAmount: number) => {
  if (loanAmount <= 0) return 0;
  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;
  return (loanAmount * ((weeklyRate * ((weeklyRate+1) ** totalPayments )) / (((weeklyRate + 1) ** totalPayments) - 1)));
};

const StatCell = ({
    startValue,
    endValue,
    title,
    description,
    ...boxProps
  }: BoxProps & { startValue: AnimatedCounterProps['startValue']; endValue: AnimatedCounterProps['endValue']; title: string; description: string }) => (
    <motion.div
      initial={{ opacity: 0.0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Box {...boxProps}>
        <AnimatedCounter ta="center" fz={rem(64)} fw="bold" endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} />
        <Text fz="lg" inline ta="center" c="dimmed">
          {description}
        </Text>
      </Box>
    </motion.div>
  );

export const Calculator = () => {
  const [baseValue, setBaseValue] = useState(0);
  const weeklyRepayment = calculateWeeklyRepayment(baseValue);
  
  return (
    <Container
      bg="var(--mantine-color-body)"
      py={{
        base: 'calc(var(--mantine-spacing-lg) * 4)',
        xs: 'calc(var(--mantine-spacing-lg) * 5)',
        lg: 'calc(var(--mantine-spacing-lg) * 6)',
      }}
      fluid
    >
      <Container size="md">
        <Stack align="center" gap="xs">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <JumboTitle order={2} fz="xs" ta="center" style={{ textWrap: 'balance' }}>
              Calculate your estimated weekly repayment
            </JumboTitle>
          </motion.div>
        </Stack>
      </Container>
      <Container size="lg" mt="calc(var(--mantine-spacing-xl) * 2)" ta="center" style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
        <Stack>
          <TextInput
            label="Loan Amount"
            type="number"
            value={baseValue}
            onChange={(event) => setBaseValue(Math.max(0, Number(event.currentTarget.value)))}
            variant="unstyled"
            leftSection="$"
            size='xl'
            styles={{
              input: { fontSize: rem(40) }, // Adjust font size here
              label: { fontSize: rem(40)},
              section:  { fontSize: rem(40)}
            }}
            ta="center"
          />
          <Slider
            label="Loan Amount"
            min={0}
            max={200000}
            step={1000}
            value={baseValue}
            onChange={(value) => setBaseValue(Math.max(0, value))}
          />
        </Stack>
        <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center" mx="xl">
          <Grid.Col span={{ base: 12, md: 12 }}>
            <StatCell startValue={baseValue} endValue={weeklyRepayment} title="37 million" description="Weekly repayment" />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};
