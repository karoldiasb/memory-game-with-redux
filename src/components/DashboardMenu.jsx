import React from "react";
import { Paper, withStyles, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 6,
  },
  title: {
    paddingBottom: theme.spacing.unit * 6,
  },
});

const DashboardMenu = ({ children, classes, title }) => (
  <Paper className={classes.root}>
    <Typography variant="h4" align="center" className={classes.title}>
      {title}
    </Typography>
    {children}
  </Paper>
);

export default withStyles(styles)(DashboardMenu);
