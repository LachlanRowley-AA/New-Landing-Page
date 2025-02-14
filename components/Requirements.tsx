'use client';

import { JumboTitle } from './JumboTitle';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Card,
  Container,
  ContainerProps,
  Flex,
  Grid,
  Group,
  Image,
  Rating,
  Stack,
  Text,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { HTMLMotionProps, motion } from 'motion/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import classes from './Requirements.module.css';

const Cell = ({ description, ...props }: { description: string; } & HTMLMotionProps<'div'>) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: 'var(--mantine-shadow-xl)' }}
    transition={{ type: 'spring' }}
    {...props}
    style={{ borderRadius: 'var(--mantine-radius-lg)', ...props.style }}
  >
    <Card className={classes.card} h="100%" withBorder>
      <Box mt="xs">
        <Text>{description}</Text>
      </Box>
    </Card>
  </motion.div>
);


type Hero02Props = ContainerProps & {
  badge?: string;
  title?: string;
  description?: string;
  callToAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  rating?: number;
  ratingLabel?: string;
};

export const Hero02 = ({
  title = 'Customer Requirements',
  ...containerProps
}: Hero02Props) => (
  <Container bg="var(--mantine-color-body)" px={0} style={{ overflow: 'hidden' }} fluid>
    <Container component="section" h="100vh" mah={400} pos="relative" size="xl" {...containerProps}>
      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        h="100%"
        w="100%"
        bg="var(--mantine-color-body)"
        style={{ zIndex: 1 }}
        opacity={0.85}
        hiddenFrom="md"
      />
      <Flex         
        justify="space-between"
        gap="calc(var(--mantine-spacing-lg) * 3)"
        p={{
          base: 0,
          sm: 'calc(var(--mantine-spacing-lg) * 2)',
        }}
        wrap={{
          base: 'wrap',
          lg: 'nowrap',
        }}
        maw="100%">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <JumboTitle c="#01E194" order={1} fz="lg" style={{ textWrap: 'balance' }}>
              {title}
            </JumboTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
          <Stack>
            <Cell description='2-year ABN Running'/>
            <Cell description='Good credit'/>
            <Cell description='Business monthly turn over to equate to the invoice amount'/>
          </Stack>
      </Flex>
      <Grid/>
    </Container>
  </Container>
);