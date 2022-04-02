import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

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
        <Typography variant='h5' color='textPrimary' align='center'>
          <b>Crawler Manager</b>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={5}>
            <Typography
              color='textPrimary'
              align='center'
              style={
                isSmScreen
                  ? { marginLeft: 8, marginRight: 8 }
                  : { marginLeft: 16 }
              }
            >
              <b>
                A company internal tool to help users launch and monitor crawler
                tasks without any programming
              </b>
            </Typography>
            <br />
            <Typography color='textPrimary' align='center'>
              Type of Work: <i>professional</i>, <i>independent</i>
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <video
              src='https://personalwebsite2.blob.core.windows.net/container/crawler_manager.mp4'
              type='video/mp4'
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
