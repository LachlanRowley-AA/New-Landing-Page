import { Box, Container, Text, Image } from '@mantine/core';
import {JumboTitle} from '../JumboTitle/JumboTitle'; // Assuming you have this component

export const Why = () => {
  const sectionHeight = '300px'; // Change this value as needed

  return (
    <Box>
    <Box w="100%" h={sectionHeight} pos="relative" style={{ overflow: 'hidden' }}>
      <Image
        src="./code2.jpg"
        alt="Code Background"
        style={{
          objectFit: 'cover',
        }}
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
        <JumboTitle
          ta="center"
          fz="md"
          fw="bold"
          c="#01E194"
          mt="xl"
          mb="xl"
        >
          Why Finance Your Website
        </JumboTitle>
      </Box>
    </Box>
    <Container size="sm">
          <Text>
            Financing your website allows you to spread the cost over time, making it more manageable. This way,
            you can invest in your online presence without the burden of a large upfront payment. It also allows
            you to allocate funds to other critical areas of your business while still getting the website you need.
          </Text>
        </Container>
    </Box>
  );
};
