'use client';

import { AnimatedCounter, AnimatedCounterProps } from '../AnimatedCounter/AnimatedCounter';
import { JumboTitle } from '../JumboTitle/JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem, TextInput, Slider, Group, useMantineTheme } from '@mantine/core';
import { color, motion } from 'motion/react';
import { useState } from 'react';
import hand from '../../assets/hand.svg';
import icon from '../../assets/stair.svg'
import NextImage  from 'next/image';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { IntroSection } from '../Intro/intro';
import { useMediaQuery } from '@mantine/hooks';


const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const DAYS_IN_YEAR = 365;
const WEEKS_IN_YEAR = 52;
const DAYS_IN_WEEK = 7;
const LOAN_TERM_YEARS = 5;


const calculateWeeklyRepayment = (loanAmount: number) => {
  if (loanAmount <= 0) {return 0};

  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const dailyRate = INTEREST_RATE / DAYS_IN_YEAR;
  const daysBetweenPayments = DAYS_IN_WEEK;

  // Effective weekly rate with daily compounding
  const effectiveWeeklyRate = (1 + dailyRate)**daysBetweenPayments - 1;

  return (
    loanAmount *
    ((effectiveWeeklyRate * (1 + effectiveWeeklyRate)**totalPayments) /
      ((1 + effectiveWeeklyRate)**totalPayments - 1))
  );
};

const calculateRemainingPrincipal = (loanAmount: number, weeksElapsed: number) => {
  if (loanAmount <= 0 || weeksElapsed <= 0) return loanAmount;

  const dailyRate = INTEREST_RATE / DAYS_IN_YEAR;
  const daysBetweenPayments = DAYS_IN_WEEK;
  const effectiveWeeklyRate = (1 + dailyRate)**daysBetweenPayments - 1;

  const weeklyRepayment = calculateWeeklyRepayment(loanAmount);

  const remainingBalance =
    loanAmount * (1 + effectiveWeeklyRate)**weeksElapsed -
    weeklyRepayment * (((1 + effectiveWeeklyRate)**weeksElapsed - 1) / effectiveWeeklyRate);

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
    >
      <Box {...boxProps}>
        <AnimatedCounter ta="center" fz={rem(64)} fw="bold" c={{base: "white",md:"#01E194"}} endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} decimals={2}  />
        <Text fz="lg" inline ta="center" c={{base: "white",md:"white"}}>
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
    >
      <Box {...boxProps}>
        <AnimatedCounter c="white" ta="center" fz={rem(32)} fw="bold" endValue={Math.max(0, endValue)} prefix="$" startValue={Math.max(0, startValue)} />
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
const LineChart = ({ loanAmount }: { loanAmount: number }) => {
  const interestCosts = [
    // calculateInterestCost(loanAmount, 4.3).toFixed(2), // 1 months
    // calculateInterestCost(loanAmount, 8.6).toFixed(2), // 2 months
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
    labels: ['3', '4', '5', '6',
      '7', '8', '9', '10', '11', '12'
    ],
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
          'rgba(1, 255, 148, 0.8)',
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
        borderWidth: 0,
      },
    ],
  };

  const options= {
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
        }
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

          }
        }
      }
    },
    plugins: {
      datalabels: {
        color: 'white',
        formatter(value : number, context: Context) {
          return `$${  Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        },
        font: {
          size: 18
        }
      },
      legend: {
        display: false,
      },
  
    }
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
          <JumboTitle ta="center" fz="xs" order={1} fw="bold" c="#01E194" mt="xl" mb="xl" pt="xl" visibleFrom='md'>
            Total Interest Cost if Paid Out Early
          </JumboTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
        <Container style={{ width: '100%', height: '100%', maxHeight: '50vh' }} p={0} visibleFrom='md'>
          <Bar data={data} plugins={[ChartDataLabels]} options={options} />
        </Container>
        </motion.div>
      </div>
    </>
  );
};




export const Calculator = () => {
  const [baseValue, setBaseValue] = useState(5000);
  const weeklyRepayment = calculateWeeklyRepayment(baseValue);
  
  const [Payout, setWeeklyPayout] = useState(0);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  return (
    <Grid
      gutter='xl'
      my={{
        base: 'calc(var(--mantine-spacing-lg) * 3)',
        xs: 'calc(var(--mantine-spacing-lg) * 4)',
        lg: 'calc(var(--mantine-spacing-lg) * 4)',
      }}
      px={{
        base: "xl"
      }}
      style={ { marginTop: '30px', paddingTop: '20px' }}
      bg="black"
    >
      <Grid.Col span={{ base: 12, md: 12 }} bg="White">
        <IntroSection/>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6}} bg="black">
        <Stack align="center" gap="xs" my="xl">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <span>
              <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} hiddenFrom='lg' c={{base: "white",md:"#01E194"}}>
                Calculate your estimated
              </JumboTitle>
              <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} hiddenFrom='lg' c={{base: "#01E194",md:"#01E194"}}>
                weekly repayment
              </JumboTitle>
            </span>
            <Grid align="center" visibleFrom='lg' gutter="xl">
              <Grid.Col span={12}>
                <span>
                  <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} c={{base: "white",md:"white"}} fw={600}>
                    Calculate your
                  </JumboTitle>
                  <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} c={{base: "01E194",md:"#01E194"}} fw={600}>
                  weekly repayment
                  </JumboTitle>
                </span>
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
              input: { fontSize: rem(40), color: isMobile? 'white': 'white'},
              label: { fontSize: rem(40), color: isMobile? 'white': 'white'},
              section:  { fontSize: rem(40), color: isMobile? 'white': 'white'} 
            }}
            ta="center"
            c={{base: "white", md:"#01E194"}}
          />
          <Slider
            label="Loan Amount"
            min={5000}
            max={75000}
            step={1000}
            value={baseValue}
            onChange={(value) => setBaseValue(Math.max(0, value))}
            c={{base: "white",md:"#01E194"}}
          />
        </Stack>
        </motion.div>
        <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center">
          <Grid.Col span={{ base: 12, md: 12 }} mx={0} px={0}>
            <StatCell startValue={baseValue} endValue={weeklyRepayment} title="Weekly Repayment" description="Weekly repayment" />
          </Grid.Col>
        </Grid>
        <Box>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >  
            <JumboTitle ta="center" fz="xs" order={1}  fw="bold" c="#01E194" mt="xl" mb="xl" pt="xl">
              Payout Options
            </JumboTitle>
            <JumboTitle ta="center" fz="xxs" order={3}  fw="bold" c="#01E194" mt="xl" mb="xl" textWrap='balance'>
              Save money with no penalties for early payout 
            </JumboTitle>
          </motion.div>
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
        </Box>
      </Container>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} visibleFrom='md'>
        <LineChart loanAmount={baseValue}/>
      </Grid.Col>
    </Grid>
  );
};
