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
        <motion.div initial={{ opacity: 0.0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* Left Side - Text */}
        <Title order={1} mb="md">
          <span style={{ color: '#01E194' }}>Flexible Website Financing </span>
          <span style={{ color: 'black' }}>for Your Business</span>
        </Title>

          <Text size="lg" c="Black">
            /CHATGPT LOREM IPSUM NOT REAL TEXT
            At [Your Company Name], we specialize in providing tailored financing
            solutions to help businesses build and launch their websites without
            the upfront cost. With years of experience in asset finance across
            industries, we now offer flexible payment options so you can invest
            in your online presence today and pay over time.
            <br /><br />
            Whether you're a startup or an established business, our financing
            options are designed to be simple, affordable, and effective.
          </Text>
      </motion.div>
    </Container>
  );
};
