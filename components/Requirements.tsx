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
        <Text fw={600} c='var(--mantine-color-white)'>{description}</Text>
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
}: Hero02Props) => {
  return(
  <Container bg="var(--mantine-color-black)" px={0} style={{ overflow: 'hidden' }} fluid bd={1}>
    <Container
      component="section"
      mih={400} // Min height instead of max height
      style={{ position: 'relative', padding: '2rem 1rem' }} // Adjust padding
      size="xl"
      {...containerProps}
    >
      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="100%"
        h="100%"
        bg="var(--mantine-color-body)"
        style={{ zIndex: -1, opacity: 0.0 }} // Push it back so it doesn't cover content
        hiddenFrom="md"
      />
      <Flex         
        justify="space-between"
        gap="calc(var(--mantine-spacing-lg) * 3)"
        p={{
          base: '1rem',
          sm: 'calc(var(--mantine-spacing-lg) * 2)',
        }}
        wrap={{
          base: 'wrap',
          lg: 'nowrap',
        }}
        style={{ maxWidth: '100%' }}
      >
        <JumboTitle c="#01E194" order={1} fz="lg" style={{ textWrap: 'balance' }}>
          {title}
        </JumboTitle>
        <Stack>
          <Cell description='2-year ABN Running'/>
          <Cell description='Good credit'/>
          <Cell description='Business monthly turn over to equate to the invoice amount'/>
        </Stack>
      </Flex>
      <Text c="#01E194" fw={600} fz='lg' style={{ textWrap: 'balance', textAlign: 'center' }}>
            If you do not meet these requirements, we may have alternative options for you
          </Text>

    </Container>
  </Container>
)};