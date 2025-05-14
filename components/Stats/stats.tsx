'use client';

import { JumboTitle } from "../JumboTitle/JumboTitle";
import { Box, BoxProps, Container, Grid, Text } from '@mantine/core';

const StatCard = ({
  title,
  description,
  ...boxProps
}: BoxProps & { title: string; description: string }) => (
  <Box {...boxProps}>
    <JumboTitle order={5} ta="center" fz="md" style={{ textWrap: 'balance' }} mb="sm">
      {title}
    </JumboTitle>
    <Text fz="xl" ta="center" c="dimmed">
      {description}
    </Text>
  </Box>
);

export const Stats = () => (
  <Container
    bg="var(--mantine-color-body)"
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 4)',
      xs: 'calc(var(--mantine-spacing-lg) * 5)',
      lg: 'calc(var(--mantine-spacing-lg) * 6)',
    }}
    fluid
  >
    <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center" mx="xl">
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <StatCard title="37 million" description="Daily active sessions" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <StatCard title="$98 trillion" description="Total market value" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4 }}>
        <StatCard title="52,000" description="Enterprise clients onboarded" />
      </Grid.Col>
    </Grid>
  </Container>
);