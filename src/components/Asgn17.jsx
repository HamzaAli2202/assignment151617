import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

export const Asgn = () => {
  const [txt, setTxt] = useState("");
  const [data, setData] = useState([]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setTxt(e.target.value)}
          variant="outlined"
          fullWidth
          label="Type Border Radius"
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData([...data, txt])}
          variant="contained"
          fullWidth
          sx={{ height: 55 }}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Grid container spacing={3} align="center">
          {data.map((item) => (
            <Grid item xs={12}>
              <div
                style={{
                  borderRadius: item,
                  border: "3px dotted black",
                  height: 150,
                }}
              >
                <h2>{item}</h2>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
