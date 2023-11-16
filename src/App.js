import React from "react";
import { Card, CardContent } from "@mui/material";
import { Asgn15 } from "./components/Asgn15";
import { Asgn16 } from "./components/Asgn16";
import "./components/common.css";
import { Asgn29 } from "./components/Asgn29";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <Asgn15 /> */}
        {/* <Asgn16 /> */}
        {/* <Asgn /> */}
        <Asgn29 />
      </CardContent>
    </Card>
  );
}

export default App;
