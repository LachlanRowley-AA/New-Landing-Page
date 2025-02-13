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
        Finance your website
      </Text>
    </>
  );
}
