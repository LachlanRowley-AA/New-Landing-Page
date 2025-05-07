'use client';

import { AnimatedCounter, AnimatedCounterProps } from './AnimatedCounter';
import { JumboTitle } from './JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem, TextInput, Slider, Group } from '@mantine/core';
import { motion } from 'motion/react';
import { useState } from 'react';
import hand from '../assets/hand.svg';
import icon from '../assets/stair.svg'
import NextImage  from 'next/image';


const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const WEEKS_IN_YEAR = 52;
const LOAN_TERM_YEARS = 5; // Placeholder loan term in years

const calculateWeeklyRepayment = (loanAmount: number) => {
  if (loanAmount <= 0) return 0;
  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;
  return (loanAmount * ((weeklyRate * ((weeklyRate+1) ** totalPayments )) / (((weeklyRate + 1) ** totalPayments) - 1)));
};

const calculateRemainingPrincipal = (loanAmount: number, weeksElapsed: number) => {
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;

  if (loanAmount <= 0 || weeksElapsed <= 0) return loanAmount;

  const weeklyRepayment = calculateWeeklyRepayment(loanAmount);

  const remainingBalance =
    loanAmount * Math.pow(1 + weeklyRate, weeksElapsed) -
    weeklyRepayment * ((Math.pow(1 + weeklyRate, weeksElapsed) - 1) / weeklyRate);

  return Math.max(0, remainingBalance);
};


const calculateInterestCost = (loanAmount: number, weeksElapsed: number) => {
  const totalPaid = calculateWeeklyRepayment(loanAmount) * weeksElapsed;
  const principalPaid = loanAmount - calculateRemainingPrincipal(loanAmount, weeksElapsed);
  return Math.max(0, totalPaid - principalPaid);
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

  const PayoutCell = ({
    startValue,
    endValue,
    title,
    description,
    payoutStartValue,
    payoutEndValue,
    payout,
    ...boxProps
  }: BoxProps & { startValue: AnimatedCounterProps['startValue']; endValue: AnimatedCounterProps['endValue']; title: string; 
    description: string; payout: string; payoutStartValue: AnimatedCounterProps['startValue']; payoutEndValue: AnimatedCounterProps['endValue'] }) => (
    <motion.div
      initial={{ opacity: 0.0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Box {...boxProps}>
        <AnimatedCounter c="#01E194" ta="center" fz={rem(32)} fw="bold" endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} />
        <Text fz="lg" inline ta="center" c="white">
          {description}
        </Text>
      </Box>
    </motion.div>
  );

export const Calculator = () => {
  const [baseValue, setBaseValue] = useState(0);
  const weeklyRepayment = calculateWeeklyRepayment(baseValue);
  
  const [Payout, setWeeklyPayout] = useState(0);

  return (
    <Container
      bg="var(--mantine-color-body)"
      py={{
        base: 'calc(var(--mantine-spacing-lg) * 3)',
        xs: 'calc(var(--mantine-spacing-lg) * 4)',
        lg: 'calc(var(--mantine-spacing-lg) * 2)',
      }}
      fluid
      style={ { marginTop: '30px', padding: '0px' }}
    >
      <Container size="md">
        <Stack align="center" gap="xs">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
          <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} hiddenFrom='lg'>
              Calculate your estimated weekly repayment
          </JumboTitle>
          <Grid align="center" visibleFrom='lg'>
            <Grid.Col span={2}>
              <NextImage
                src={icon}
                alt=""
                style={{ height: '100%', maxHeight: '15vh' ,width: 'auto', maxWidth: '15vw' }}
              />
            </Grid.Col>
            <Grid.Col span={8}>
            <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }}>
              Calculate your estimated weekly repayment
            </JumboTitle>
            </Grid.Col>
            <Grid.Col span={2}>
            <NextImage
              src={hand}
              alt=""
              style={{ height: '100%', maxHeight: '20vh' ,width: 'auto', maxWidth: '15vw' }}
            />
            </Grid.Col>
          </Grid>
          </motion.div>
        </Stack>
      </Container>
      <Container size="lg" mt="calc(var(--mantine-spacing-md) * 1)" ta="center" style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
      <motion.div initial={{ opacity: 0.0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
        </motion.div>
        <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center" mx="xl">
          <Grid.Col span={{ base: 12, md: 12 }}>
            <StatCell startValue={baseValue} endValue={weeklyRepayment} title="37 million" description="Weekly repayment" />
          </Grid.Col>
        </Grid>
      </Container>

      <Container fluid style = {{ marginTop: '20px', paddingBottom: '40px' }}
        bg="var(--mantine-color-black)">
        <JumboTitle ta="center" fz="xs" order={1}  fw="bold" c="#01E194" mt="xl" mb="xl" pt="xl">
          Payout Options
        </JumboTitle>
        <JumboTitle ta="center" fz="xxs" order={3}  fw="bold" c="#01E194" mt="xl" mb="xl" textWrap='balance'>
              Save money with no penalties for early payout 
        </JumboTitle>
        <Grid gutter="calc(var(--mantine-spacing-lg) * 1)" align="center" mx="xl">
            <Grid.Col span={{ base: 12, md: 4 }}> {/* 3 month payout */}
              <PayoutCell
                startValue={baseValue}
                endValue={calculateInterestCost(baseValue, 13)} // ~13 weeks in 3 months
                payoutStartValue={baseValue}
                payoutEndValue={calculateRemainingPrincipal(baseValue, 13)}
                title="3 Month Balance"
                description="Total Interest Cost after 3 months if paid out in full"
                payout='Principal Remaining'
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}> {/* 6 month payout */}
              <PayoutCell
                startValue={baseValue}
                endValue={calculateInterestCost(baseValue, 26)}
                payoutStartValue={baseValue}
                payoutEndValue={calculateRemainingPrincipal(baseValue, 26)}
                title="6 Month Balance"
                description="Total Interest Cost after 6 months if paid out in full"
                payout='Principal Remaining'
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}> {/* 12 month payout */}
              <PayoutCell
                startValue={baseValue}
                endValue={calculateInterestCost(baseValue, 52)}
                payoutStartValue={baseValue}
                payoutEndValue={calculateRemainingPrincipal(baseValue, 52)}
                title="12 Month Balance"
                description="Total Interest Cost after 12 months if paid out in full"
                payout='Principal Remaining'
              />
            </Grid.Col>
          </Grid>
        </Container>
    </Container>
  );
};
