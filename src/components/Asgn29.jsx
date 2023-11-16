import React, { useState } from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Asgn29 = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          label="Type Here"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData([...data, input])}
          sx={{ height: 55 }}
          variant="contained"
          color="secondary"
          fullWidth
        >
          submit
        </Button>
      </Grid>
      <Grid item xs={2}>
        <img style={{ height: 100 }} src="images/Engine.jpg" alt="" />
      </Grid>
      {data.map((item) => (
        <Grid item xs={item}>
          <img style={{ height: 100 }} src="images/Boogi.jpg" alt="" />
        </Grid>
      ))}
    </Grid>
  );
};
