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
};

export const AnimatedCounter = ({
  startValue: rawStartValue,
  endValue: rawEndValue,
  prefix,
  suffix,
  ...textProps
}: AnimatedCounterProps) => {
  const startValue = 0.0; // Fixed start value as per your original code
  const [currentValue, setCurrentValue] = useState(startValue);

  // Immediately calculate the final value
  useEffect(() => {
    setCurrentValue(rawEndValue);
  }, [rawEndValue]); // Only update the value when endValue changes

  return (
    <Text {...textProps}>
      {prefix}
      {Number(currentValue).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
      {suffix}
    </Text>
  );
};
