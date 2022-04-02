import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    width: "100%",
  },
  backgroundSm: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: "100%",
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
      className={isSmScreen ? classes.backgroundSm : classes.background}
    >
      <Grid item>
        <Typography
          variant='h5'
          color='textPrimary'
          align='center'
          style={isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}}
        >
          <b>Clock Face</b>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={4}>
            <Typography
              color='textPrimary'
              align='center'
              style={
                isSmScreen
                  ? { marginLeft: 8, marginRight: 8 }
                  : { marginRight: 16 }
              }
            >
              <b>A real-time clock face made with TouchDesigner</b>
            </Typography>
            <br />
            <Typography color='textPrimary' align='center'>
              Type of Work: <i>school project</i>, <i>independent</i>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <video
              src='https://personalwebsite2.blob.core.windows.net/container/Screen Recording 2022-04-01 at 15.34.03.mov'
              type='video/mov'
              autoPlay
              loop
              width='100%'
              muted
              playsInline
              style={isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
