import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
export const Asgn16 = () => {
  const [data, setData] = useState("BROWN");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="h1" color={data}>
          {data}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("ORANGE")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Orange
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("GREEN")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Green
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("PURPLE")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Purple
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("BLACK")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Black
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("DARKBLUE")}
          variant="contained"
          color="warning"
          fullWidth
        >
          DarkBlue
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("GRAY")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Gray
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("MAROON")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Maroon
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData("VIOLET")}
          variant="contained"
          color="warning"
          fullWidth
        >
          violet
        </Button>
      </Grid>
    </Grid>
  );
};
