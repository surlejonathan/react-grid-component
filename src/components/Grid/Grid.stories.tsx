import React from "react";
import { Meta } from "@storybook/react";
import Grid from "./Grid";
import GridRuler from "../GridRuler/GridRuler";
import Box from "../Box/Box";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

export const Basic = (args: any) => (
  <div style={{ position: "relative", height: "100vh" }}>
    <Grid container spacing='sm' {...args}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);
export const WithRuler = (args: any) => (
  <div style={{ position: "relative", height: "100vh" }}>
    <GridRuler spacing='sm' />
    <Grid container spacing='sm' {...args}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);
export const Interactive = (args: any) => (
  <div style={{ position: "relative", height: "100vh" }}>
    <Grid container alignItems='center' {...args}>
      <Grid item xs={1}>
        <Box>Box 1</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 2</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 3</Box>
      </Grid>
      <Grid item xs={1}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);
