import { Box, Container, Text, Image, Accordion, Grid, useMantineTheme } from '@mantine/core';
import { JumboTitle } from '../JumboTitle/JumboTitle';
import { motion } from 'motion/react';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const args = [
  {
    id: '1',
    value: 'Improved Cash Flow',
    answer: `Financing your website allows you to spread the cost over manageable weekly payments, helping preserve cash for other important areas of your business like operations, marketing, or staffing. 
    This makes it easier to invest in your online presence without straining your budget.`
  },
  {
    id: '2',
    value: 'Get More for Your Money',
    answer: `Instead of settling for a basic website due to budget limitations, financing gives you access to a higher-quality, custom-built site with the features and functionality you really need. 
    It’s a smarter way to get a better end product without a large upfront investment.`
  },
  {
    id: '3',
    value: 'Start Earning Sooner',
    answer: `Financing lets you launch your website now rather than waiting to save up the full cost. That means you can start attracting customers, generating leads, and making sales right away. 
    The earlier your site goes live, the sooner it can start paying for itself. With no-fee early payout options, an early launch of your website
    could cover the entire interest and then some before you would have launched your website without financing.`
  }
];

export const Why = () => {
  const sectionHeight = '250px';
  let animVariants = {};
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  if(!isMobile) {
    animVariants = {
        initial:{ opacity: 0, x: 500 },
        whileInView:{ opacity: 1, x: 0 },
        transition:{ duration: 0.6, ease: 'easeInOut' }  
    }
  }

  const reasons = args.map((r) => (
    <Accordion.Item value={r.id} key={r.id}>
      <Accordion.Control
        icon={<Image src="./AssetAlleyBrandmark_ColourScreenUse.svg" w={40}/>}
      >
        <Box>
          {r.value}
        </Box>
      </Accordion.Control>
      <Accordion.Panel>{r.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Box bg="white" mb="xl" pb="xl">
      <Box w="100%" h="100%" mah={sectionHeight} pos="relative" style={{ overflow: 'hidden' }}>
        <Image
          src="./code2.jpg"
          alt="Code Background"
          style={{ objectFit: 'cover' }}
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(3, 3, 3, 0.6)"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <JumboTitle ta="center" fz="md" fw="bold" c="#01E194" mt="xl" mb="xl">
            Why Finance Your Website
          </JumboTitle>
        </Box>
      </Box>

      <Container size="sm" />

      <Grid mx="xl">
        <Grid.Col span={{ base: 6 }} visibleFrom="md">
          <Image src="./guy_at_desk.jpg" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} mt="xl" >
        <motion.div
          initial={!isMobile ? { opacity: 0, x: 500 } : false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={!isMobile ? { duration: 0.6, ease: 'easeInOut' } : {}}
          >

            <Accordion
              multiple
              variant="separated"
              chevron={<IconChevronDown size={36} />}
              chevronSize={36}
              defaultValue={['1','2','3']}
              styles={{
                control: {
                  minHeight: '70px',
                  fontSize: '1.2rem',
                  position: 'relative',
                  color: '#d3d4d5',
                  backgroundColor: '#F4F5FA',
                  border: '0px',
                },
                panel: {
                  fontSize: '1.1rem',
                  backgroundColor: '#FFFAFA',
                },
                label: {
                  color: 'black',
                  fontWeight: 600
                },
                item: {
                  border: '0px',
                  color: 'black',
                  fontSize: '24px'
                },
                chevron: {
                  color: '#01E194'
                }
              }}
              c="white"
            >
              {reasons}
            </Accordion>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
