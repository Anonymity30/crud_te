import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
const User = (props) => {
  console.log(props);
  return (
    <Paper style={{ padding: 10 }}>
      <Grid Container style={{ width: "100%" }}>
        {Object.keys(props).map((key) => (
          <Grid item key={key} xs={12}>
            <Typography>
              {key} {props[key]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default User;
