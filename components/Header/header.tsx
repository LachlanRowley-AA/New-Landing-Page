import React from "react";
import { Container, Grid, Title, Text, Image } from "@mantine/core";
import { Welcome } from "../Welcome/Welcome";

export const Header = () => {
  return (
      <Grid py="xl" bg="black">
        <Grid.Col span={{ base: 12, md: 8 }}>
            <Welcome />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }} visibleFrom="md">
          <Image
            src="./AssetAlleyBrandmark_Transparent.svg"
            h="100%"
            w="60%"
           />
        </Grid.Col>
      </Grid>
  );
};
