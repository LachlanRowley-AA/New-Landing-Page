'use client';

import { AnimatedCounter, AnimatedCounterProps } from './AnimatedCounter';
import { JumboTitle } from './JumboTitle';
import { Badge, Box, BoxProps, Container, Grid, Stack, Text, rem } from '@mantine/core';
import { motion } from 'motion/react';

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
      <AnimatedCounter ta="center" fz={rem(64)} fw="bold" endValue={endValue} suffix="%" startValue={startValue} />
      <Text fz="lg" inline ta="center" c="dimmed">
        {description}
      </Text>
    </Box>
  </motion.div>
);

export const Stats02 = () => (
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
          initial={{ opacity: 0.0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <Badge variant="light" size="lg" mb="lg">
            Hiring Simplified
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <JumboTitle order={2} fz="xs" ta="center" style={{ textWrap: 'balance' }}>
            Transform your hiring from endless cycles to confident decisions that stick.
          </JumboTitle>
        </motion.div>
      </Stack>
    </Container>
    <Container size="lg" mt="calc(var(--mantine-spacing-xl) * 2)">
      <Grid gutter="calc(var(--mantine-spacing-lg) * 4)" align="center" mx="xl">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCell value={20} title="37 million" description="Faster time-to-hire" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCell value={34} title="$98 trillion" description="Lower early turnover" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatCell value={40} title="52,000" description="Higher offer acceptance" />
        </Grid.Col>
      </Grid>
    </Container>
  </Container>
);
