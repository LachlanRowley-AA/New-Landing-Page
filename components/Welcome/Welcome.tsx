import { Text, Title, Image, Flex } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../public/AA_Dark_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';

export function Welcome() {
  return (
    <>
      <Flex justify="center" align="center" direction="row" wrap="nowrap" pt="md">
        <NextImage
          src={image}
          alt="Logo"
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
      </Flex>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={580} mx="auto" mt="xl">
        Finance your websites and apps
      </JumboTitle>
    </>
  );
}
