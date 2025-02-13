'use client';

import { Marquee } from './Marquee';
import { Container, ContainerProps, GridProps, Group, Text, TextProps } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandMantine,
  IconBrandMedium,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandVercelFilled,
} from '@tabler/icons-react';
import { ReactNode } from 'react';
import { JumboTitle } from './JumboTitle';

const ITEMS = [
  <Group key="mantine" wrap="nowrap">
    <IconBrandMantine size={40} />
    <Text fz={32} fw={600}>
      Mantine
    </Text>
  </Group>,
  <Group key="nextjs" wrap="nowrap">
    <IconBrandNextjs size={40} />
    <Text fz={32} fw={600}>
      Next.js
    </Text>
  </Group>,
  <Group key="react" wrap="nowrap">
    <IconBrandReact size={40} />
    <Text fz={32} fw={600}>
      React
    </Text>
  </Group>,
  <Group key="medium" wrap="nowrap">
    <IconBrandMedium size={40} />
    <Text fz={32} fw={600}>
      Medium
    </Text>
  </Group>,
  <Group key="vercel" wrap="nowrap">
    <IconBrandVercelFilled size={40} />
    <Text fz={32} fw={600}>
      Vercel
    </Text>
  </Group>,
  <Group key="github" wrap="nowrap">
    <IconBrandGithub size={40} />
    <Text fz={32} fw={600}>
      Github
    </Text>
  </Group>,
];

export type Logos03Props = ContainerProps & {
  items?: ReactNode[];
  gridProps?: GridProps;
  title?: string;
  titleProps?: TextProps;
};

export const Logos03 = ({
  title = 'Access Loans from over {NUMBER} Lenders ',
  items = ITEMS,
  gridProps,
  titleProps,
  ...containerProps
}: Logos03Props) => (
  <Container
    bg="var(--mantine-color-body)"
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 1)',
      xs: 'calc(var(--mantine-spacing-lg) * 2)',
      lg: 'calc(var(--mantine-spacing-lg) * 3)',
    }}
    size="xl"
    {...containerProps}
  >
    {/* <Text
      fz="lg"
      ta="center"
      mb="calc(var(--mantine-spacing-lg) * 2)"
      fw={600}
      c="dimmed"
      {...titleProps}
    >
      {title}
    </Text> */}
    <JumboTitle order={2} fz="xs" ta="center" style={{ textWrap: 'balance' }} mb="sm">
    Helping finance SOME CLIENTS
    </JumboTitle>
    <Marquee items={items} gap="calc(var(--mantine-spacing-lg) * 2)" duration={15} />
  </Container>
);