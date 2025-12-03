'use client';

import { useEffect, useState } from 'react';
import { Text, type TextProps } from '@mantine/core';

export type AnimatedCounterProps = Omit<TextProps, 'children'> & {
  startValue: number;
  endValue: number;
  duration?: number;
  slowdownStepCount?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export const AnimatedCounter = ({
  startValue: rawStartValue,
  endValue: rawEndValue,
  prefix,
  suffix,
  decimals,
  ...textProps
}: AnimatedCounterProps) => {
  const startValue = 0.0;
  const [currentValue, setCurrentValue] = useState(startValue);

  // Immediately calculate the final value
  useEffect(() => {
    setCurrentValue(rawEndValue);
  }, [rawEndValue]);

  return (
    <Text {...textProps}>
      {prefix}
      {Number(currentValue).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </Text>
  );
};
