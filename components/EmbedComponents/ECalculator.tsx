'use client';

import { AnimatedCounter, AnimatedCounterProps } from '../AnimatedCounter';
import { JumboTitle } from '../JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem, TextInput, Slider, useMantineTheme } from '@mantine/core';
import { motion } from 'motion/react';
import { useState } from 'react';

const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const WEEKS_IN_YEAR = 52;
const LOAN_TERM_YEARS = 5; // Placeholder loan term in years
const MONTHS_IN_YEAR = 12;

const calculateWeeklyRepayment = (loanAmount: number) => {
  if (loanAmount <= 0) return 0;
  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;
  return (loanAmount * ((weeklyRate * ((weeklyRate+1) ** totalPayments )) / (((weeklyRate + 1) ** totalPayments) - 1)));
};

const calculateMonthlyRepayment = (loanAmount: number) => {
  if (loanAmount <= 0) return 0;
  const totalPayments = LOAN_TERM_YEARS * MONTHS_IN_YEAR;
  const monthlyRate = INTEREST_RATE / MONTHS_IN_YEAR;
  return (loanAmount * ((monthlyRate * ((monthlyRate+1) ** totalPayments )) / (((monthlyRate + 1) ** totalPayments) - 1)));
}

const StatCell = ({
  startValue,
  endValue,
  title,
  description,
  ...boxProps
  }: BoxProps & { startValue: AnimatedCounterProps['startValue']; endValue: AnimatedCounterProps['endValue']; title: string; description: string }) => {
    const theme = useMantineTheme(); // Access the theme
    
    return (
      <motion.div
        initial={{ opacity: 0.0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <Box {...boxProps}>
          <AnimatedCounter
            ta="center"
            fz={rem(64)}
            fw="bold"
            endValue={Math.max(0, endValue)}
            prefix="$"
            startValue={Math.max(0, startValue)}
            style={{ color: theme.colors.header[0] }}
          />
          <Text
            fz="lg"
            inline
            ta="center"
            style={{
              color: theme.colors.secondary[0], // Apply the secondary color from the theme
              fontSize: rem(16), // Set a dynamic font size
              fontWeight: 500, // Use a medium weight for the description
            }}
          >
            {description}
          </Text>
        </Box>
      </motion.div>
    );
  };



export const Calculator = () => {
  const theme = useMantineTheme();
  const [baseValue, setBaseValue] = useState(0);
  const weeklyRepayment = calculateWeeklyRepayment(baseValue);
  const monthlyRepayment = calculateMonthlyRepayment(baseValue);
  
  return (
    <Container
      bg={theme.colors.background[0]}
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
            <JumboTitle order={2} fz="xs" ta="center" style={{ textWrap: 'balance', color: theme.colors.header[1] }}>
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
              input: { fontSize: rem(40), color: theme.colors.secondary[0] }, // Adjust font size here
              label: { fontSize: rem(40), color: theme.colors.secondary[0]},
              section:  { fontSize: rem(40), color: theme.colors.secondary[0]},
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
          styles={(theme) => ({
            label: {
              color: theme.colors.tertiary[0],
              backgroundColor: theme.colors.header[1],
            },
            bar: {
              backgroundColor: theme.colors.header[0], // Filled section
            },
            thumb: {
              borderColor: theme.colors.secondary[0], // Thumb styling
              backgroundColor: theme.colors.header[0], // Thumb styling
            },
            root: {
              '--slider-track-bg': theme.colors.unfilledBar[1], // Override the unfilled track color
            },
          })}
        />

        </Stack>
        <Grid align="center" mx="xl">
          <Grid.Col mt='xs' span={{ base: 6, md: 6 }} style={{borderRight: '4px solid', borderRightColor: theme.colors.header[0]}}>
            <StatCell startValue={baseValue} endValue={weeklyRepayment} title="37 million" description="Weekly repayment" />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6 }}>
            <StatCell startValue={baseValue} endValue={monthlyRepayment} title="37 million" description="Monthly repayment" />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};
