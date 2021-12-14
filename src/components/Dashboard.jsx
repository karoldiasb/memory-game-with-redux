import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    height: "100vh",
    backgroundColor: "#ccc",
  },
};

const Dashboard = ({ children, classes }) => (
  <Grid
    className={classes.root}
    alignItems="center"
    justifyContent="center"
    container
  >
    {children}
  </Grid>
);

export default withStyles(styles)(Dashboard);
