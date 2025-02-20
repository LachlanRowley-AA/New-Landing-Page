import { Text, Title, Image, Flex } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../assets/Asset Alley Brandmark_ColourScreenUse.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';

export function ShopWelcome() {
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
              {' '}alley
          </Text>
        </Title>
      </Flex>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={580} mx="auto" mt="xl">
        Finance your Shop Fitout
      </JumboTitle>
    </>
  );
}
