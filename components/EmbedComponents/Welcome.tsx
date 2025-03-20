import { Text, Title, Image, Flex } from '@mantine/core';
import darkLogo from '../../public/AA_Dark_Logo.svg';
import lightLogo from '../../public/AA_Light_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';

export function Welcome({ darkMode }: { darkMode: string | null }) {
  return (
    <>
      <Flex justify="center" align="center" direction="row" wrap="nowrap" bg={darkMode==='true' ? 'black' : 'white'}>
      <NextImage
          src={darkMode==='true' ? darkLogo : lightLogo}
          alt="Logo"
          style={{ height: '100%', width: 'auto'}}
        />
      </Flex>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={580} mx="auto" mt="xl">
        Finance your websites and apps {darkMode}
      </JumboTitle>
    </>
  );
}
