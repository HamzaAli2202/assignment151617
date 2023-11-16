import React, { useState } from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";
export const Asgn15 = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          fullWidth
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData([...data, input])}
          variant="contained"
          fullWidth
          color="error"
          sx={{ height: 55 }}
        >
          Submit
        </Button>
      </Grid>
      {data.map((item) => (
        <Grid item xs={item}>
          <Card
            sx={{
              bgcolor: "lightcoral",
              height: 150,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              boxShadow: "5px 5px 5px red",
            }}
          >
            <CardContent>Grid item sx={item}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
