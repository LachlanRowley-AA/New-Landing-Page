'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Box, Flex, type BoxProps, type FlexProps } from '@mantine/core';

export type MarqueeProps = BoxProps & {
  /**
   * The items to display in the marquee.
   */
  items: ReactNode[];
  /**
   * Whether to reverse the direction of the marquee.
   */
  reverse?: boolean;
  /**
   * The spacing between each item.
   */
  gap?: FlexProps['gap'];
  /**
   * The duration of the animation.
   */
  duration?: number;

  /**
   * Whether to show the gradient.
   */
  showGradient?: boolean;
};

const MarqueeFrame = ({
  items,
  reverse,
  duration,
  gap,
}: Pick<MarqueeProps, 'items' | 'reverse' | 'duration' | 'gap'>) => (
  <Flex
    gap={gap}
    component={motion.div}
    initial={{ x: `${!reverse ? 0 : '-100%'}` }}
    animate={{ x: `${!reverse ? '-100%' : 0}` }}
    transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
    style={{ flexShrink: 0 }}
  >
    {items.map((item, index) => (
      <Flex key={index} mr={gap} ml={index === 0 ? gap : 0}>
        {item}
      </Flex>
    ))}
  </Flex>
);

export const Marquee = ({
  items,
  reverse,
  duration = 20,
  gap = 'md',
  showGradient = true,
  ...boxProps
}: MarqueeProps) => (
  <Box
    style={{
      overflowX: 'hidden',
    }}
    {...boxProps}
  >
    <Flex
      style={{
        maskImage: showGradient
          ? `linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    )`
          : undefined,
      }}
    >
      <MarqueeFrame items={items} reverse={reverse} duration={duration} gap={gap} />
      <MarqueeFrame items={items} reverse={reverse} duration={duration} gap={gap} />
    </Flex>
  </Box>
);
