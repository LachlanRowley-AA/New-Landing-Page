import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import { Calculator } from "../Calculator/Calculator";

export const IntroSection = () => {
  return (
      <Grid py="xl" my="xl">
        {/* Left Side - Text */}
        <Grid.Col span={{ base: 12, md: 6 }} bg="black" px="xl">
          <Title order={1} mb="md">
            Flexible Website Financing for Your Business
          </Title>
          <Text size="lg" c="white">
            ///CHATGPT LOREM IPSUM NOT REAL TEXT
            At [Your Company Name], we specialize in providing tailored financing
            solutions to help businesses build and launch their websites without
            the upfront cost. With years of experience in asset finance across
            industries, we now offer flexible payment options so you can invest
            in your online presence today and pay over time.
            <br /><br />
            Whether you're a startup or an established business, our financing
            options are designed to be simple, affordable, and effective.
          </Text>
        </Grid.Col>

        {/* Right Side - Calculator */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Calculator />
        </Grid.Col>
      </Grid>
  );
};
