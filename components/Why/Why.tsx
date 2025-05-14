import { Box, Container, Text, Image, Accordion, Grid } from '@mantine/core';
import { JumboTitle } from '../JumboTitle/JumboTitle';
import { motion } from 'motion/react';
import { useState } from 'react';

const args = [
  {
    value: 'Improved Cash Flow',
    answer: `Financing your website allows you to spread the cost over manageable monthly payments, helping preserve cash for other important areas of your business like operations, marketing, or staffing. 
    This makes it easier to invest in your online presence without straining your budget.`
  },
  {
    value: 'Get More for Your Money',
    answer: `Instead of settling for a basic website due to budget limitations, financing gives you access to a higher-quality, custom-built site with the features and functionality you really need. 
    It’s a smarter way to get a better end product without a large upfront investment.`
  },
  {
    value: 'Ongoing Support Included',
    answer: `Website financing plans often come with built-in services like hosting, updates, security, and technical support.
     This means you’re not just getting a website—you’re getting peace of mind, knowing that your site stays up-to-date, secure, and performing at its best.`
  }
];

export const Why = () => {
  const sectionHeight = '300px';
  const [opened, setOpened] = useState<string | null>(null);

  const reasons = args.map((r) => (
    <Accordion.Item value={r.value} key={r.value}>
    <motion.div
      initial={{ opacity: 0.0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <Accordion.Control
        onClick={() => setOpened((prev) => (prev === r.value ? null : r.value))}
      >
        <Box>
          {r.value}
        </Box>
      </Accordion.Control>
      </motion.div>
      <Accordion.Panel>{r.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Box bg="white">
      <Box w="100%" h={sectionHeight} pos="relative" style={{ overflow: 'hidden' }}>
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
          bg="rgba(0, 0, 0, 0.75)"
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

      <Grid>
        <Grid.Col span={{ base: 6 }} visibleFrom="md">
          <Image src="./guy_at_desk.jpg" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Accordion
            value={opened}
            onChange={setOpened}
            styles={{
              control: {
                minHeight: '70px',
                fontSize: '1.2rem',
                position: 'relative',
              },
              panel: {
                fontSize: '1rem',
              },
              label: {
                color: 'black',
              },
            }}
          >
            {reasons}
          </Accordion>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
