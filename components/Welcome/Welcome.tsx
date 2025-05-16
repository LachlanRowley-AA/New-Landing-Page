'use client';

import { Text, Title, Image, Flex } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../public/AA_Dark_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle/JumboTitle';
import { motion } from 'motion/react'

export function Welcome() {
  return (
    <>
      <motion.div initial={{ opacity: 0.0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Flex justify="center" align="center" direction="row" wrap="nowrap" pt="xs" px={0} mx={0}>
        <NextImage
          src={image}
          alt="Logo"
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
      </Flex>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={580} mx="auto" mt="xl" fw={700}>
        Finance your websites and software
      </JumboTitle>
      </motion.div>
    </>
  );
}
