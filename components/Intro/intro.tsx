import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import { Calculator } from "../Calculator/Calculator";
import { motion} from 'motion/react';
import { Stats } from "../Stats/stats";

export const IntroSection = () => {
  return (
    <Container size="xl" py="xl" id="finance">
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
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Text size="lg" c="black" mb="lg">
          Building on our strong foundation in traditional asset finance, we’re now expanding into the website and software finance market—empowering businesses to invest in the digital tools they need to succeed in a competitive marketplace.
        </Text>
      </motion.div>

      {/* Paragraph 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Text size="lg" c="black" mb="lg">
          We work hand-in-hand with clients to make sure high-quality websites, custom software, and digital infrastructure are more accessible—through flexible, affordable finance options that preserve cash flow and support long-term scalability.
        </Text>
      </motion.div>

      {/* Paragraph 4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <Text size="lg" c="black">
          Whether you're a startup launching your first site or an established business upgrading your digital presence, Asset Alley is here to help you move forward with confidence.
        </Text>
      </motion.div>
      <Stats/>
    </Container>
  );
};
