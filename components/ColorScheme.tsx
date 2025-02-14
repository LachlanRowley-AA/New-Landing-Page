'use client';

import {
  Box,
  Button,
  type ButtonProps,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export type ColorSchemeButtonProps = ButtonProps & {
  iconSize?: number;
  iconStroke?: number;
};

export const ColorSchemeButton = ({
  iconSize = 128,
  iconStroke = 2,
  ...buttonProps
}: ColorSchemeButtonProps) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Tooltip
      label={`${computedColorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      <Button
        w={64}
        h={64}
        p={0}
        variant="subtle"
        onClick={() =>
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }
        aria-label="Toggle color scheme"
        {...buttonProps}
      >
        <Box
          p={0}
          component={IconSun}
          stroke={iconStroke}
          size={iconSize}
          lightHidden
        />
        <Box
          p={0}
          component={IconMoon}
          stroke={iconStroke}
          size={iconSize}
          darkHidden
        />
      </Button>
    </Tooltip>
  );
};