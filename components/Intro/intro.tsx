import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import { Calculator } from "../Calculator/Calculator";
import { motion} from 'motion/react';

// export const IntroSection = () => {
//   return (
//       <Grid py="xl" my="xl">
//         {/* Left Side - Text */}
//         <Grid.Col span={{ base: 12, md: 6 }} bg="black" px="xl">
//           <Title order={1} mb="md">
//             Flexible Website Financing for Your Business
//           </Title>
//           <Text size="lg" c="white">
//             /CHATGPT LOREM IPSUM NOT REAL TEXT
//             At [Your Company Name], we specialize in providing tailored financing
//             solutions to help businesses build and launch their websites without
//             the upfront cost. With years of experience in asset finance across
//             industries, we now offer flexible payment options so you can invest
//             in your online presence today and pay over time.
//             <br /><br />
//             Whether you're a startup or an established business, our financing
//             options are designed to be simple, affordable, and effective.
//           </Text>
//         </Grid.Col>

//         {/* Right Side - Calculator */}
//         <Grid.Col span={{ base: 12, md: 6 }} py="xl">
//           <Calculator/>
//         </Grid.Col>
//       </Grid>
//   );
// };

export const IntroSection = () => {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        <span style={{ color: '#01E194' }}>Flexible Website Financing </span>
        <span style={{ color: 'black' }}>for Your Business</span>
      </Title>

      {/* Paragraph 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <Text size="lg" c="black" mb="lg">
          At Asset Alley, we're full-service asset finance specialists committed to helping businesses grow with tailored, strategic funding solutions.
        </Text>
      </motion.div>

      {/* Paragraph 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Text size="lg" c="black" mb="lg">
          Building on our strong foundation in traditional asset finance, we’re now expanding into the website and software finance space—empowering businesses to invest in the digital tools they need to succeed in a competitive marketplace.
        </Text>
      </motion.div>

      {/* Paragraph 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Text size="lg" c="black" mb="lg">
          We work hand-in-hand with clients to make high-quality websites, custom software, and digital infrastructure more accessible—through flexible, affordable finance options that preserve cash flow and support long-term scalability.
        </Text>
      </motion.div>

      {/* Paragraph 4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2.1 }}
      >
        <Text size="lg" c="black">
          Whether you're a startup launching your first site or an established business upgrading your digital presence, Asset Alley is here to help you move forward with confidence.
        </Text>
      </motion.div>
    </Container>
  );
};
