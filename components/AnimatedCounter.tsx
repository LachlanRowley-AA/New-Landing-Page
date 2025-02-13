// 'use client';

// import { Text, type TextProps } from '@mantine/core';
// import { useInViewport } from '@mantine/hooks';
// import { useEffect, useState } from 'react';

// export type AnimatedCounterProps = Omit<TextProps, 'children'> & {
//   startValue: number;
//   endValue: number;
//   duration?: number;
//   slowdownStepCount?: number;
//   prefix?: string;
//   suffix?: string;
// };

// export const AnimatedCounter = ({
//   startValue: rawStartValue,
//   endValue: rawEndValue,
//   duration = 0.001,
//   slowdownStepCount = 7,
//   prefix,
//   suffix,
//   ...textProps
// }: AnimatedCounterProps) => {
//   const startValue = 0.00; // Fixed start value as per your original code
//   const [currentValue, setCurrentValue] = useState(startValue);
//   const { ref, inViewport } = useInViewport();
//   const [isIncrementing, setIsIncrementing] = useState(startValue < rawEndValue);
//   const [endValue, setEndValue] = useState(rawEndValue);

//   // Update the endValue state when the prop changes
//   useEffect(() => {
//     setEndValue(rawEndValue);
//   }, [rawEndValue]);

//   // Update the increment direction based on the endValue
//   useEffect(() => {
//     setIsIncrementing(currentValue < endValue);
//   }, [currentValue, endValue]);

//   useEffect(() => {
//     if (!inViewport || currentValue === endValue) return;

//     const step = isIncrementing ? 0.01 : -0.01;
//     const totalSteps = Math.abs((endValue - currentValue) / step);
//     const baseInterval = duration / totalSteps;

//     const timer = setInterval(() => {
//       setCurrentValue((prev) => {
//         const newValue = parseFloat((prev + step).toFixed(2));
//         return isIncrementing ? Math.min(newValue, endValue) : Math.max(newValue, endValue);
//       });
//     }, baseInterval);

//     return () => clearInterval(timer);
//   }, [inViewport, endValue, isIncrementing, duration, currentValue]); // Do not include currentValue as dependency for looping

//   return (
//     <Text ref={ref} {...textProps}>
//       {prefix}
//       {currentValue.toFixed(2)}
//       {suffix}
//     </Text>
//   );
// };

'use client';

import { Text, type TextProps } from '@mantine/core';
import { useEffect, useState } from 'react';

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
  const startValue = 0.00; // Fixed start value as per your original code
  const [currentValue, setCurrentValue] = useState(startValue);

  // Immediately calculate the final value
  useEffect(() => {
    setCurrentValue(rawEndValue);
  }, [rawEndValue]); // Only update the value when endValue changes

  return (
    <Text {...textProps}>
      {prefix}
      {currentValue.toFixed(2)}
      {suffix}
    </Text>
  );
};
