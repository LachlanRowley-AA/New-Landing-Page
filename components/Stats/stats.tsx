'use client';

import { JumboTitle } from "../JumboTitle/JumboTitle";
import { Box, BoxProps, Container, Grid, Text, Card, rem } from '@mantine/core';
import { AnimatedCounter } from "../AnimatedCounter2/AnimatedCounter2";
import SlotCounter from 'react-slot-counter'

const StatCard = ({
  title,
  description,
  prefix,
  ...boxProps
}: BoxProps & { title: string; description: string, prefix: string }) => (
  <Box {...boxProps} w="100%">
    <Card withBorder bg="rgb(0, 0, 0)" h="100%" radius="md">
      <Container>
        <Box
          style={{
            display: 'flex',
            alignItems: 'bottom',
            justifyContent: 'center',
            gap: '0.25rem',
            fontSize: '2rem', // adjust as needed
            color: '#01E194',
            fontWeight: 700,
          }}
        >
          <SlotCounter
            value={title}
            charClassName="slot-char"
            containerClassName="slot-counter"
          />
        </Box>
      </Container>
      <Text fz="xl" ta="center" c="#01E194">
        {description}
      </Text>
    </Card>
  </Box>
);

export const Stats = () => (
  <Container
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 2)',
      xs: 'calc(var(--mantine-spacing-lg) * 1)',
      lg: 'calc(var(--mantine-spacing-lg) * 2)',
    }}
    fluid
  >
    <Grid gutter="xl">
      <Grid.Col span={{ base: 4, sm: 4, md: 4 }}>
        <StatCard title="10" description="Businesses Supported" prefix="" />
      </Grid.Col>
      <Grid.Col span={{ base: 4, sm: 4, md: 4 }}>
        <StatCard title="4,000,000" description="Loans Approved" prefix=""/>
      </Grid.Col>
      <Grid.Col span={{ base: 4, sm: 4, md: 4 }}>
        <StatCard title="$50" description="Financed" prefix="$"/>
      </Grid.Col>
    </Grid>
  </Container>
);
