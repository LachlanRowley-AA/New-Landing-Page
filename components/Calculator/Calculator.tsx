'use client';

import { AnimatedCounter, AnimatedCounterProps } from '../AnimatedCounter/AnimatedCounter';
import { JumboTitle } from '../JumboTitle/JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem, TextInput, Slider, Group } from '@mantine/core';
import { color, motion } from 'motion/react';
import { useState } from 'react';
import hand from '../../assets/hand.svg';
import icon from '../../assets/stair.svg'
import NextImage  from 'next/image';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IntroSection } from '../Intro/intro';


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
        <AnimatedCounter ta="center" fz={rem(64)} fw="bold" c="black" endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} />
        <Text fz="lg" inline ta="center" c="black">
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
        <AnimatedCounter c="white" ta="center" fz={rem(32)} fw="bold" endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} />
        <Group justify="center" gap={5}>
          <Text c="#01E194" fz="lg">
            Total Interest Cost
          </Text>
          <Text fz="lg" c="white">
            {description}
          </Text>
        </Group>
      </Box>
    </motion.div>
  );


const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});
const LineChart = ({ loanAmount }: { loanAmount: number }) => {
  const interestCosts = [
    calculateInterestCost(loanAmount, 4.3).toFixed(2), // 1 months
    calculateInterestCost(loanAmount, 8.6).toFixed(2), // 2 months
    calculateInterestCost(loanAmount, 13).toFixed(2), // 3 months
    calculateInterestCost(loanAmount, 17.3).toFixed(2), // 4 months
    calculateInterestCost(loanAmount, 21.6).toFixed(2), // 5 months
    calculateInterestCost(loanAmount, 26).toFixed(2), // 6 months
    calculateInterestCost(loanAmount, 30.3).toFixed(2), // 7 months
    calculateInterestCost(loanAmount, 34.6).toFixed(2), // 8 months
    calculateInterestCost(loanAmount, 39).toFixed(2), // 9 months
    calculateInterestCost(loanAmount, 43.3).toFixed(2), // 10 months
    calculateInterestCost(loanAmount, 47.6).toFixed(2), // 11 months
    calculateInterestCost(loanAmount, 52).toFixed(2), // 12 months    
  ];

  const data = {
    labels: ['1 month', '2 months', '3 months', '4 months', '5 months', '6 months',
      '7 months', '8 months', '9 months', '10 months', '11 months', '12 months'
    ],
    datasets: [
      {
        label: 'Total Interest Cost',
        data: interestCosts,
        backgroundColor: [
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
          'rgba(1, 255, 148, 0.3)',
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
          'rgba(1, 255, 148, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  const options= {
    indexAxis: "y",
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { 
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            size: 20,
          },
        }
      }
    },
    plugins: {
      datalabels: {
        color: 'white',
        formatter: function(value, context) {
          return '$' + Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
      },
      legend: {
        display: false,
      },
  
    }
  };

  return (
    <div style={{ width: 'auto', height: 'auto', backgroundColor: 'black', paddingLeft: '2vw'}}>
        <JumboTitle ta="center" fz="xs" order={1}  fw="bold" c="#01E194" mt="xl" mb="xl" pt="xl">
          Total Interest Cost if Paid Out Early
        </JumboTitle>
      <Bar data={data} plugins={[ChartDataLabels]} options={options} 
      />
    </div>
  );
};




export const Calculator = () => {
  const [baseValue, setBaseValue] = useState(5000);
  const weeklyRepayment = calculateWeeklyRepayment(baseValue);
  
  const [Payout, setWeeklyPayout] = useState(0);

  return (
    <Grid
      py={{
        base: 'calc(var(--mantine-spacing-lg) * 3)',
        xs: 'calc(var(--mantine-spacing-lg) * 4)',
        lg: 'calc(var(--mantine-spacing-lg) * 2)',
      }}
      px={{
        base: 'calc(var(--mantine-spacing-lg) * 2)',
      }}
      style={ { marginTop: '30px', paddingTop: '20px' }}
    >
      <Grid.Col span={{ base: 12, md: 6 }} bg="black">
        <IntroSection />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} bg="#d3d4d5">
        <Stack align="center" gap="xs">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
          <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} hiddenFrom='lg' c="black">
              Calculate your estimated weekly repayment
          </JumboTitle>
          <Grid align="center" visibleFrom='lg'>
            <Grid.Col span={2}>
              <NextImage
                src={hand}
                alt=""
                style={{ height: '100%', maxHeight: '20vh' ,width: 'auto', maxWidth: '15vw' }}
              />
            </Grid.Col>
            <Grid.Col span={8}>
              <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} c="black">
                Calculate your estimated weekly repayment
              </JumboTitle>
            </Grid.Col>
          </Grid>
          </motion.div>
        </Stack>
      <Container size="lg" mt="calc(var(--mantine-spacing-md) * 1)" ta="center" style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
      <motion.div initial={{ opacity: 0.0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
            size='xl'
            styles={{
              input: { fontSize: rem(40), color: 'black' }, // Adjust font size here
              label: { fontSize: rem(40), color: 'black' },
              section:  { fontSize: rem(40), color: 'black'}
            }}
            ta="center"
            c="black"
          />
          <Slider
            label="Loan Amount"
            min={5000}
            max={75000}
            step={1000}
            value={baseValue}
            onChange={(value) => setBaseValue(Math.max(0, value))}
            c="black"
          />
        </Stack>
        </motion.div>
        <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center" mx="xl">
          <Grid.Col span={{ base: 12, md: 12 }}>
            <StatCell startValue={baseValue} endValue={weeklyRepayment} title="Weekly Repayment" description="Weekly repayment" />
          </Grid.Col>
        </Grid>
      </Container>
      </Grid.Col>
      <Grid.Col span={{ base:12, md: 6 }} bg="black">
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
                description="after 3 months if paid out in full"
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
                description="after 6 months if paid out in full"
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
                description="after 12 months if paid out in full"
                payout='Principal Remaining'
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <LineChart loanAmount={baseValue}/>
        </Grid.Col>
    </Grid>
  );
};
