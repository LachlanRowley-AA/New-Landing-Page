'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import { color, motion } from 'motion/react';
import {
  Badge,
  Box,
  BoxProps,
  Container,
  Grid,
  Group,
  rem,
  Slider,
  Stack,
  Switch,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import hand from '../../assets/hand.svg';
import icon from '../../assets/stair.svg';
import { AnimatedCounter, AnimatedCounterProps } from '../AnimatedCounter/AnimatedCounter';
import { JumboTitle } from '../JumboTitle/JumboTitle';

import 'chart.js/auto';

import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { useMediaQuery } from '@mantine/hooks';
import { IntroSection } from '../Intro/intro';

const DEFAULT_INTEREST_RATE = 15.95; // 15.95% annual interest
const DAYS_IN_YEAR = 365;
const WEEKS_IN_YEAR = 52;
const MONTHS_IN_YEAR = 12;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 365 / 12; // Average days per month
const LOAN_TERM_YEARS = 5;

const calculateRepayment = (loanAmount: number, interestRate: number, isWeekly: boolean) => {
  if (loanAmount <= 0) {
    return 0;
  }

  const annualRate = interestRate / 100;
  const totalPayments = isWeekly
    ? LOAN_TERM_YEARS * WEEKS_IN_YEAR
    : LOAN_TERM_YEARS * MONTHS_IN_YEAR;
  const dailyRate = annualRate / DAYS_IN_YEAR;
  const daysBetweenPayments = isWeekly ? DAYS_IN_WEEK : DAYS_IN_MONTH;

  // Effective period rate with daily compounding
  const effectivePeriodRate = (1 + dailyRate) ** daysBetweenPayments - 1;

  return (
    loanAmount *
    ((effectivePeriodRate * (1 + effectivePeriodRate) ** totalPayments) /
      ((1 + effectivePeriodRate) ** totalPayments - 1))
  );
};

const calculateRemainingPrincipal = (
  loanAmount: number,
  periodsElapsed: number,
  interestRate: number,
  isWeekly: boolean
) => {
  if (loanAmount <= 0 || periodsElapsed <= 0) return loanAmount;

  const annualRate = interestRate / 100;
  const dailyRate = annualRate / DAYS_IN_YEAR;
  const daysBetweenPayments = isWeekly ? DAYS_IN_WEEK : DAYS_IN_MONTH;
  const effectivePeriodRate = (1 + dailyRate) ** daysBetweenPayments - 1;

  const periodRepayment = calculateRepayment(loanAmount, interestRate, isWeekly);

  const remainingBalance =
    loanAmount * (1 + effectivePeriodRate) ** periodsElapsed -
    periodRepayment * (((1 + effectivePeriodRate) ** periodsElapsed - 1) / effectivePeriodRate);

  return Math.max(0, remainingBalance);
};

const calculateInterestCost = (
  loanAmount: number,
  periodsElapsed: number,
  interestRate: number,
  isWeekly: boolean
) => {
  const totalPaid = calculateRepayment(loanAmount, interestRate, isWeekly) * periodsElapsed;
  const principalPaid =
    loanAmount - calculateRemainingPrincipal(loanAmount, periodsElapsed, interestRate, isWeekly);
  return Math.max(0, totalPaid - principalPaid);
};

const StatCell = ({
  startValue,
  endValue,
  title,
  description,
  ...boxProps
}: BoxProps & {
  startValue: AnimatedCounterProps['startValue'];
  endValue: AnimatedCounterProps['endValue'];
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0.0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <Box {...boxProps}>
      <AnimatedCounter
        ta="center"
        fz={rem(64)}
        fw="bold"
        c={{ base: 'white', md: '#01E194' }}
        endValue={Math.max(0, endValue)}
        prefix="$"
        startValue={Math.max(0, startValue)}
        decimals={2}
      />
      <Text fz="lg" inline ta="center" c={{ base: 'white', md: 'white' }}>
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
}: BoxProps & {
  startValue: AnimatedCounterProps['startValue'];
  endValue: AnimatedCounterProps['endValue'];
  title: string;
  description: string;
  payout: string;
  payoutStartValue: AnimatedCounterProps['startValue'];
  payoutEndValue: AnimatedCounterProps['endValue'];
}) => (
  <motion.div
    initial={{ opacity: 0.0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <Box {...boxProps}>
      <AnimatedCounter
        c="white"
        ta="center"
        fz={rem(32)}
        fw="bold"
        endValue={Math.max(0, endValue)}
        prefix="$"
        startValue={Math.max(0, startValue)}
        decimals={2}
      />
      <Group justify="center" gap={5}>
        <Text c="#01E194" fz="lg">
          Total Interest Cost
        </Text>
        <Text fz="lg" c="white" fw="500">
          {description}
        </Text>
      </Group>
    </Box>
  </motion.div>
);

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

const LineChart = ({
  loanAmount,
  interestRate,
  isWeekly,
}: {
  loanAmount: number;
  interestRate: number;
  isWeekly: boolean;
}) => {
  // Convert periods to appropriate time units
  const periodMultiplier = isWeekly ? 4.33 : 1; // Approximate weeks per month
  const periods = isWeekly
    ? [13, 17.3, 21.6, 26, 30.3, 34.6, 39, 43.3, 47.6, 52, 260] // weeks
    : [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 60]; // months

  const interestCosts = periods.map((period) =>
    calculateInterestCost(loanAmount, period, interestRate, isWeekly).toFixed(2)
  );

  const data = {
    labels: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '60'],
    datasets: [
      {
        label: 'Total Interest Cost',
        data: interestCosts,
        backgroundColor: [
          'rgba(1, 255, 148, 0.4)',
          'rgba(1, 255, 148, 0.8)',
          'rgba(1, 255, 148, 0.4)',
          'rgba(1, 255, 148, 0.8)',
          'rgba(1, 255, 148, 0.4)',
          'rgba(1, 255, 148, 0.8)',
          'rgba(1, 255, 148, 0.4)',
          'rgba(1, 255, 148, 0.8)',
          'rgba(1, 255, 148, 0.4)',
          'rgba(1, 255, 148, 0.8)',
          'rgba(1, 255, 148, 0.4)',
        ],
        borderColor: [
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
          'rgba(1, 255, 148, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    barPercentage: 1.25,
    categoryPercenage: 1.0,
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'y' as const,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            size: 24,
          },
        },
        title: {
          text: 'Months',
          display: true,
          color: 'white',
          font: {
            size: 24,
          },
        },
      },
    },
    plugins: {
      datalabels: {
        color: 'white',
        formatter(value: number, context: Context) {
          return `$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        },
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <style>
        {`
          .chart-container {
            width: 100%;
            height: 100%;
            background-color: black;
            padding-left: 2vw;
            min-height: 200px;
          }
  
          @media (max-width: 768px) {
            .chart-container {
              min-height: 500px;
            }
          }
        `}
      </style>
      <div className="chart-container">
        <motion.div
          initial={{ opacity: 0.0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <JumboTitle
            ta="center"
            fz="xs"
            order={1}
            fw="bold"
            c="#01E194"
            mt="xl"
            mb="xl"
            pt={0}
            visibleFrom="md"
          >
            Total Interest Cost if Paid Out Early
          </JumboTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Container
            style={{ width: '100%', height: '100%', maxHeight: '400px' }}
            p={0}
            visibleFrom="md"
          >
            <Bar data={data} plugins={[ChartDataLabels]} options={options} />
          </Container>
        </motion.div>
      </div>
    </>
  );
};

export const Calculator = () => {
  const [baseValue, setBaseValue] = useState(5000);
  const [interestRate, setInterestRate] = useState(DEFAULT_INTEREST_RATE);
  const [isWeekly, setIsWeekly] = useState(true);

  const repayment = calculateRepayment(baseValue, interestRate, isWeekly);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Grid
      gutter="xl"
      my={{
        base: 'calc(var(--mantine-spacing-lg) * 0)',
        xs: 'calc(var(--mantine-spacing-lg) * 0)',
        lg: 'calc(var(--mantine-spacing-lg) * 0)',
      }}
      px={{
        base: 'xl',
      }}
      style={{ marginTop: '30px', paddingTop: '20px' }}
      bg="black"
    >
      <Grid.Col span={{ base: 12, md: 6 }} bg="black" mb="md">
        <Stack align="center" gap="xs" my="xl">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <span>
              <JumboTitle
                order={3}
                fz="xs"
                ta="center"
                style={{ textWrap: 'balance' }}
                hiddenFrom="lg"
                c={{ base: 'white', md: '#01E194' }}
              >
                Calculate your estimated
              </JumboTitle>
              <JumboTitle
                order={3}
                fz="xs"
                ta="center"
                style={{ textWrap: 'balance' }}
                hiddenFrom="lg"
                c={{ base: '#01E194', md: '#01E194' }}
              >
                {isWeekly ? 'weekly' : 'monthly'} repayment
              </JumboTitle>
            </span>
            <Grid align="center" visibleFrom="lg" gutter="xl">
              <Grid.Col span={12}>
                <span>
                  <JumboTitle
                    order={3}
                    fz="xs"
                    ta="center"
                    style={{ textWrap: 'balance' }}
                    c={{ base: 'white', md: 'white' }}
                    fw={600}
                  >
                    Calculate your
                  </JumboTitle>
                  <JumboTitle
                    order={3}
                    fz="xs"
                    ta="center"
                    style={{ textWrap: 'balance' }}
                    c={{ base: '01E194', md: '#01E194' }}
                    fw={600}
                  >
                    {isWeekly ? 'weekly' : 'monthly'} repayment
                  </JumboTitle>
                </span>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Stack>

        <Container
          size="lg"
          mt="calc(var(--mantine-spacing-md) * 1)"
          ta="center"
          style={{ paddingLeft: '5vw', paddingRight: '5vw' }}
        >
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack>
              <TextInput
                label="Loan Amount"
                type="text"
                value={baseValue.toLocaleString()}
                onChange={(event) => {
                  const rawValue = event.currentTarget.value.replace(/,/g, ''); // remove commas
                  const numericValue = Math.max(0, Number(rawValue));
                  setBaseValue(numericValue);
                }}
                variant="unstyled"
                leftSection="$"
                size="xl"
                styles={{
                  input: { fontSize: rem(40), color: isMobile ? 'white' : 'white' },
                  label: { fontSize: rem(40), color: isMobile ? 'white' : 'white' },
                  section: { fontSize: rem(40), color: isMobile ? 'white' : 'white' },
                }}
                ta="center"
                c={{ base: 'white', md: '#01E194' }}
              />
              <Slider
                label="Loan Amount"
                min={5000}
                max={75000}
                step={1000}
                value={baseValue}
                onChange={(value) => setBaseValue(Math.max(0, value))}
                c={{ base: 'white', md: '#01E194' }}
              />

              {/* Interest Rate Input */}
              <TextInput
                label="Interest Rate (%)"
                type="number"
                placeholder="15.95"
                value={interestRate === DEFAULT_INTEREST_RATE ? '' : interestRate.toString()}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  if (value === '') {
                    setInterestRate(DEFAULT_INTEREST_RATE);
                  } else {
                    const numericValue = Math.max(0, parseFloat(value) || 0);
                    setInterestRate(numericValue);
                  }
                }}
                variant="unstyled"
                rightSection="%"
                size="lg"
                styles={{
                  input: { fontSize: rem(24), color: isMobile ? 'white' : 'white' },
                  label: { fontSize: rem(20), color: isMobile ? 'white' : 'white' },
                  section: { fontSize: rem(24), color: isMobile ? 'white' : 'white' },
                }}
                ta="center"
                c={{ base: 'white', md: 'white' }}
              />

              {/* Weekly/Monthly Toggle */}
              <Group justify="center" mt="md">
                <Text c="white" fz="lg">
                  Monthly
                </Text>
                <Switch
                  checked={isWeekly}
                  onChange={(event) => setIsWeekly(event.currentTarget.checked)}
                  color="#01E194"
                  size="lg"
                />
                <Text c="white" fz="lg">
                  Weekly
                </Text>
              </Group>
            </Stack>
          </motion.div>

          <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center">
            <Grid.Col span={{ base: 12, md: 12 }} mx={0} px={0}>
              <StatCell
                startValue={baseValue}
                endValue={repayment}
                title={isWeekly ? 'Weekly Repayment' : 'Monthly Repayment'}
                description={isWeekly ? 'Weekly repayment' : 'Monthly repayment'}
              />
            </Grid.Col>
          </Grid>

          <Box>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <JumboTitle
                ta="center"
                fz="xs"
                order={1}
                fw="bold"
                c="#01E194"
                mt="xl"
                mb="xl"
                pt="xl"
              >
                Payout Options
              </JumboTitle>
              <JumboTitle
                ta="center"
                fz="xxs"
                order={3}
                fw="bold"
                c="#01E194"
                mt="xl"
                mb="xl"
                textWrap="balance"
              >
                Save money with no penalties for early payout
              </JumboTitle>
            </motion.div>

            <Grid gutter="calc(var(--mantine-spacing-lg) * 1)" align="center" mx="xl">
              <Grid.Col span={{ base: 12, md: 4 }}>
                {' '}
                {/* 3 month payout */}
                <PayoutCell
                  startValue={baseValue}
                  endValue={calculateInterestCost(
                    baseValue,
                    isWeekly ? 13 : 3,
                    interestRate,
                    isWeekly
                  )} // 3 months
                  payoutStartValue={baseValue}
                  payoutEndValue={calculateRemainingPrincipal(
                    baseValue,
                    isWeekly ? 13 : 3,
                    interestRate,
                    isWeekly
                  )}
                  title="3 Month Balance"
                  description="after 3 months if paid out in full"
                  payout="Principal Remaining"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                {' '}
                {/* 6 month payout */}
                <PayoutCell
                  startValue={baseValue}
                  endValue={calculateInterestCost(
                    baseValue,
                    isWeekly ? 26 : 6,
                    interestRate,
                    isWeekly
                  )}
                  payoutStartValue={baseValue}
                  payoutEndValue={calculateRemainingPrincipal(
                    baseValue,
                    isWeekly ? 26 : 6,
                    interestRate,
                    isWeekly
                  )}
                  title="6 Month Balance"
                  description="after 6 months if paid out in full"
                  payout="Principal Remaining"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                {' '}
                {/* 12 month payout */}
                <PayoutCell
                  startValue={baseValue}
                  endValue={calculateInterestCost(
                    baseValue,
                    isWeekly ? 52 : 12,
                    interestRate,
                    isWeekly
                  )}
                  payoutStartValue={baseValue}
                  payoutEndValue={calculateRemainingPrincipal(
                    baseValue,
                    isWeekly ? 52 : 12,
                    interestRate,
                    isWeekly
                  )}
                  title="12 Month Balance"
                  description="after 12 months if paid out in full"
                  payout="Principal Remaining"
                />
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} visibleFrom="md">
        <LineChart loanAmount={baseValue} interestRate={interestRate} isWeekly={isWeekly} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12 }} bg="White">
        <IntroSection />
      </Grid.Col>
    </Grid>
  );
};
