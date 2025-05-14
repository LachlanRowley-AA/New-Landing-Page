import React from "react";
import { Container, Grid, Title, Text, Image } from "@mantine/core";
import { Welcome } from "../Welcome/Welcome";

export const Header = () => {
  return (
      <Grid py="xs" bg="black" align="center">
        <Grid.Col span={{ base: 12, md: 8 }}>
            <Welcome />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }} visibleFrom="md">
          <Image
            src="./AssetAlleyBrandmark_Transparent.svg"
            h="80%"
            w="40%"
           />
        </Grid.Col>
      </Grid>
  );
};
