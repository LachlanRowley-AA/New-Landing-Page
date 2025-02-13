import { Text, Title, Image, Flex } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../assets/Asset Alley Brandmark_ColourScreenUse.svg';
import NextImage from 'next/image';

export function Welcome() {
  return (
    <>
      <Flex justify="center" align="center" direction="row" wrap="nowrap">
      <Image
          component={NextImage}
          src={image}
          alt="Logo"
          style={{ height: '100%', width: 'auto'}}
        />
        <Title className={classes.title} ta="center" mr={20}>
          asset 
          <Text inherit component="span" style={{ fontWeight: 400}}>
              {' '}alley
          </Text>
        </Title>
      </Flex>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server-side rendering. 
        If you want to learn more on Mantine + Next.js integration follow{' '}
      </Text>
    </>
  );
}
